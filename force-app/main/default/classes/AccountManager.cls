public with sharing class AccountManager {
    @AuraEnabled
    public static List<Account> getAccount(Integer numberOfRecords){
        return [SELECT Id, Name, Phone, Website FROM Account LIMIT : numberOfRecords];
    }
}
