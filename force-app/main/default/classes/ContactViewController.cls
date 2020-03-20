public with sharing class ContactViewController {
    public ContactViewController(){
        
    }
    @AuraEnabled(Cacheable=true)
    public static List<Contact> getContList(){
    List<Contact> conList = [Select FirstName,LastName,Id from Contact];
    return  conList;       
    }
    
}
