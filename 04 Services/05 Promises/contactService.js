(function() {
    "use strict";
    
    function ContactService(di, $injector, $http, $q) {
        function fixContacts(contacts) {
            contacts.forEach(function (contact) {
                contact.email = contact.name + "@gmail.com";

                //throw new Error("Oops");
            });
            
            return contacts;
        }

        function betterHttp(url) {
            return $http.get(url).then(function(res) {
                return res.data;
            });
        }
        
        return {
            getAll: function() {
                
                return betterHttp("contacts.json").then(fixContacts);
                
                
                // $.ajax({
                //     type: "GET",
                //     url: "contacts.json",
                //     success: function(contacts) {
                //         try {
                //             contacts.forEach(function (contact) {
                //                 contact.email = contact.name + "@gmail.com";
                //
                //                 throw new Error("Oops");
                //             });
                //             success(contacts);
                //         }
                //         catch(err) {
                //             if(error) {
                //                 error(err);
                //             }
                //         }
                //     },
                //     error: error,
                // });
            }
        };
    }
    
    angular.module("myApp").factory("contactService", ContactService);
})();
