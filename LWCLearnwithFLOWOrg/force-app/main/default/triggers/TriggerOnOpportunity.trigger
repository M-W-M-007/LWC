trigger TriggerOnOpportunity on Opportunity (before update, after update) {
 if(Trigger.isBefore){
        if(Trigger.isUpdate){
            //OpportunityTriggerHandler.beforeUpdate(Trigger.New, Trigger.oldMap);            
        }
    }else if(Trigger.isAfter){
        if(Trigger.isUpdate){
            OpportunityTriggerHandler.aftereUpdate(Trigger.New, Trigger.oldMap);
        }
    } 
}