public with sharing class ContactViewController {
    @AuraEnabled
    public static List<Contact> getContList(cacheable=true){
    List<Contact> conList = [Select FirstName,LastName,Id from Contact];
    return  conList;       
    }
    
}
