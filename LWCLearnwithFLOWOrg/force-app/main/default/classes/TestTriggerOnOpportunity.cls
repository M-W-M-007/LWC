@isTest
public class TestTriggerOnOpportunity {
 @isTest
    private static void TestOpportunity() {  
        
        
        Opportunity opp = new Opportunity();
        opp.Name = 'Test Class Opp';
        opp.StageName =  'Prospecting';
        opp.Description = 'New Opportunity';
        opp.CloseDate = system.today();
        
        insert opp;
        
        Pricebook2 pb22 = new Pricebook2(Name='testDIE');
        insert pb22;
        
        Product2 pro2 = new Product2(Name='BXCD', isActive=true);
        insert pro2;
        
        PricebookEntry pbe2 =new PricebookEntry(unitprice=0.01,Product2Id=pro2.Id,Pricebook2Id=Test.getStandardPricebookId(),
                                                isActive=true,UseStandardPrice = false);
        insert pbe2;
        
        OpportunityLineItem OPplineitem2 = new OpportunityLineItem (Quantity=2, OpportunityId=opp.Id,UnitPrice=0.01,PriceBookEntryId=pbe2.Id);
        insert OPplineitem2;
        
        System.assert(OPplineitem2.Id  != null);
        
        opp.StageName = 'Closed Won';
        opp.Description = 'Stage Name has been changed';
        opp.CloseDate = opp.CloseDate.addYears(1);
        update opp;
        
        
    }
}