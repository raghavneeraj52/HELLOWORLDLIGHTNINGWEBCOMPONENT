public with sharing class AccountDisplay {
    @AuraEnabled(cacheable=true)
    public static List<Account> displayAccData() {
    List<Account> accList = [Select id,Name from Account limit 10];
    System.debug('accList'+accList);
    return accList; 
    }
    @AuraEnabled(cacheable=true)
    public static List<Contact> displayConData(String accId) {
    List<Contact> conList = [Select id,Lastname,AccountId from Contact where AccountId =: accId];
   System.debug('accId'+accId);
   System.debug('conList'+conList);
    return conList; 
    }
}
