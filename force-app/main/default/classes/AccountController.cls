public with sharing class AccountController {
    public static List<Account> getAllActiveAccountsjjjjg() {
      return [SELECT Id,Name,Active__c FROM Account WHERE Active__c = 'Yes'];
    }
  }