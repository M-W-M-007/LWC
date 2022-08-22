public class OpportunityTriggerHandler {
    public static void beforeUpdate(List<Opportunity> newOpportunityList, Map<Id, Opportunity> oldOpportunityMap){
        //Code to be written;
    }
    
    public static void aftereUpdate(List<Opportunity> newOpportunityList, Map<Id, Opportunity> oldOpportunityMap){
        createNewOpportunity(newOpportunityList, oldOpportunityMap);
    }
    
    private static void createNewOpportunity(List<Opportunity> newOpportunityList, Map<Id, Opportunity> oldOpportunityMap){
        List<Opportunity> opportunities = new List<Opportunity>();
        Set<Id> opportunityIds = new Set<Id>();
        Map<Id, Opportunity> oldToNewClonedOpportunities = new Map<Id, Opportunity>(); 
        for(Opportunity opp: newOpportunityList){
            if(opp.StageName=='Closed Won' && oldOpportunityMap.get(opp.Id).StageName != opp.StageName){
                opportunityIds.add(opp.Id);
                Opportunity opportunity = oldOpportunityMap.get(opp.Id).clone();
                opportunity.Name = 'Renew '+opportunity.Name;
                opportunity.StageName = 'Prospecting';
                opportunity.CloseDate =  opportunity.CloseDate.addYears(1);
                opportunities.add(opportunity);
                oldToNewClonedOpportunities.put(opp.Id, opportunity);
            }
        }
        if(opportunities.size() > 0){
            insert oldToNewClonedOpportunities.values();
            List<OpportunityLineItem> oppLineItemsNew = new List<OpportunityLineItem>();
            List<OpportunityLineItem> oppLineItems = [SELECT Id, Name, TotalPrice, CreatedDate, OpportunityId, SortOrder, 
                                                      PricebookEntryId, Product2Id, ProductCode, Quantity, ListPrice, 
                                                      ServiceDate, Description FROM OpportunityLineItem
                                                      WHERE OpportunityId IN: opportunityIds];
            if(oppLineItems.size() > 0){
                for(OpportunityLineItem oppLineItem: oppLineItems){
                    OpportunityLineItem oppLI = oppLineItem.clone();      
                    oppLI.OpportunityId = oldToNewClonedOpportunities.get(oppLineItem.OpportunityId).Id;
                    oppLineItemsNew.add(oppLI);
                }
            }
            if(oppLineItemsNew.size() > 0){
                Insert oppLineItemsNew;
            }
        }
    }    
}