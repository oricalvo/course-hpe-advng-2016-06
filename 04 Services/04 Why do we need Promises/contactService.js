(function() {
    "use strict";
    
    function ContactService(di, $injector) {
        return {
            getAll: function(success, error) {
                $.ajax({
                    type: "GET",
                    url: "contacts.json",
                    success: function(contacts) {
                        try {
                            contacts.forEach(function (contact) {
                                contact.email = contact.name + "@gmail.com";

                                throw new Error("Oops");
                            });
                            success(contacts);
                        }
                        catch(err) {
                            if(error) {
                                error(err);
                            }
                        }
                    },
                    error: error,
                });
            }
        };
    }
    
    angular.module("myApp").factory("contactService", ContactService);
})();
