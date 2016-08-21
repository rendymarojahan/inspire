angular.module('starter.controllers', [])

.controller('AppCtrl', function($scope, $ionicModal, $timeout, CurrentUserService) {

  // With the new view caching in Ionic, Controllers are only called
  // when they are recreated or on app start, instead of every page change.
  // To listen for when this page is active (for example, to refresh data),
  // listen for the $ionicView.enter event:
  //$scope.$on('$ionicView.enter', function(e) {
  //});

  // Form data for the login modal
  $scope.loginData = {};

  // Create the login modal that we will use later
  $ionicModal.fromTemplateUrl('templates/login.html', {
    scope: $scope
  }).then(function(modal) {
    $scope.modal = modal;
  });

  // Triggered in the login modal to close it
  $scope.closeLogin = function() {
    $scope.modal.hide();
  };

  // Open the login modal
  $scope.login = function() {
    $scope.modal.show();
  };

  $scope.fullname = CurrentUserService.fullname;
  $scope.photo = CurrentUserService.picture;
  $scope.level = CurrentUserService.level;

  $scope.message = "";
  $scope.trigmessage = function() {
    if ($scope.message === "") {
        $scope.message = "open";
    } else if ($scope.message === "open") {
        $scope.message = "";
    }
  };

  $scope.profile = "";
  $scope.trigprofile = function() {
    if ($scope.profile === "") {
        $scope.profile = "open";
    } else if ($scope.profile === "open") {
        $scope.profile = "";
    }
  };

  $scope.home = "";
  $scope.trighome = function() {
    if ($scope.home === "") {
        $scope.home = "active";
        $scope.homeshow = "display: block;";
    } else if ($scope.home === "active") {
        $scope.home = "";
        $scope.homeshow = "display: none;";
    }
  };
  $scope.order = "";
  $scope.trigorder = function() {
    if ($scope.order === "") {
        $scope.order = "active";
        $scope.ordershow = "display: block;";
    } else if ($scope.order === "active") {
        $scope.order = "";
        $scope.ordershow = "display: none;";
    }
  };
  $scope.prod = "";
  $scope.trigprod = function() {
    if ($scope.prod === "") {
        $scope.prod = "active";
        $scope.prodshow = "display: block;";
    } else if ($scope.prod === "active") {
        $scope.prod = "";
        $scope.prodshow = "display: none;";
    }
  };
  $scope.inven = "";
  $scope.triginven = function() {
    if ($scope.inven === "") {
        $scope.inven = "active";
        $scope.invenshow = "display: block;";
    } else if ($scope.inven === "active") {
        $scope.inven = "";
        $scope.invenshow = "display: none;";
    }
  };
  $scope.purc = "";
  $scope.trigpurc = function() {
    if ($scope.purc === "") {
        $scope.purc = "active";
        $scope.purcshow = "display: block;";
    } else if ($scope.purc === "active") {
        $scope.purc = "";
        $scope.purcshow = "display: none;";
    }
  };
  $scope.mast = "";
  $scope.trigmast = function() {
    if ($scope.mast === "") {
        $scope.mast = "active";
        $scope.mastshow = "display: block;";
    } else if ($scope.mast === "active") {
        $scope.mast = "";
        $scope.mastshow = "display: none;";
    }
  };
  $scope.sett = "";
  $scope.trigsett = function() {
    if ($scope.sett === "") {
        $scope.sett = "active";
        $scope.settshow = "display: block;";
    } else if ($scope.sett === "active") {
        $scope.sett = "";
        $scope.settshow = "display: none;";
    }
  };

  // Perform the login action when the user submits the login form
  $scope.doLogin = function() {
    console.log('Doing login', $scope.loginData);

    // Simulate a login delay. Remove this and replace with your login
    // code if using a login system
    $timeout(function() {
      $scope.closeLogin();
    }, 1000);
  };
})

.controller('dashboardCtrl', function($scope) {
  $scope.playlists = [
    { title: 'Reggae', id: 1 },
    { title: 'Chill', id: 2 },
    { title: 'Dubstep', id: 3 },
    { title: 'Indie', id: 4 },
    { title: 'Rap', id: 5 },
    { title: 'Cowbell', id: 6 }
  ];
})

.controller('orderCtrl', function($scope, ionicDatePicker, PickTransactionServices) {
  $scope.OrderDate = '';
  $scope.DeadlineDate = '';
  var tanggal = {
    callback: function (val) {  //Mandatory
      $scope.OrderDate = new Date(val);
      PickTransactionServices.updateDate(val);
      console.log('Return value from the datepicker popup is : ' + val, new Date(val));
    },
    disabledDates: [            //Optional
      new Date(2016, 2, 16),
      new Date(2015, 3, 16),
      new Date(2015, 4, 16),
      new Date(2015, 5, 16),
      new Date('Wednesday, August 12, 2015'),
      new Date("08-16-2016"),
      new Date(1439676000000)
    ],
    from: new Date(2012, 1, 1), //Optional
    to: new Date(2016, 10, 30), //Optional
    inputDate: new Date(),      //Optional
    mondayFirst: true,          //Optional
    disableWeekdays: [0],       //Optional
    closeOnSelect: false,       //Optional
    templateType: 'popup'       //Optional
  };
  var deadline = {
    callback: function (val) {  //Mandatory
      $scope.DeadlineDate = new Date(val);
      PickTransactionServices.updateDate(val);
      console.log('Return value from the datepicker popup is : ' + val, new Date(val));
    },
    disabledDates: [            //Optional
      new Date(2016, 2, 16),
      new Date(2015, 3, 16),
      new Date(2015, 4, 16),
      new Date(2015, 5, 16),
      new Date('Wednesday, August 12, 2015'),
      new Date("08-16-2016"),
      new Date(1439676000000)
    ],
    from: new Date(2012, 1, 1), //Optional
    to: new Date(2016, 10, 30), //Optional
    inputDate: new Date(),      //Optional
    mondayFirst: true,          //Optional
    disableWeekdays: [0],       //Optional
    closeOnSelect: false,       //Optional
    templateType: 'popup'       //Optional
  };

  $scope.openDatePicker = function(){
    ionicDatePicker.openDatePicker(tanggal);
  };
  $scope.DeadlinePicker = function(){
    ionicDatePicker.openDatePicker(deadline);
  };

  $scope.new = "btn-default";
  $scope.repair = "btn-default";
  $scope.trignew = function() {
    $scope.new = "btn-primary";
    $scope.repair = "btn-default";
  };
  $scope.trigrepair = function() {
    $scope.new = "btn-default";
    $scope.repair = "btn-primary";
  };
})

.controller('registrationCtrl', function($scope, $state, $ionicLoading, MembersFactory, CurrentUserService, PickTransactionServices, $ionicPopup, myCache) {

  $scope.user = {};
  $scope.item = {'photo': ''};

  $scope.$on('$ionicView.beforeEnter', function () {
    $scope.item.photo = PickTransactionServices.photoSelected;
  });

  // Gender
  $scope.male = "";
  $scope.female = "";
  $scope.trigmale = function() {
    $scope.male = "checked";
    $scope.female = "";
    $scope.gender = "male";
  };
  $scope.trigfemale = function() {
    $scope.male = "";
    $scope.female = "checked";
    $scope.gender = "female";
  };

  // User Level
  $scope.admin = "";
  $scope.finance = "";
  $scope.sales = "";
  $scope.customer = "";
  $scope.trigadmin = function() {
    $scope.admin = "checked";
    $scope.finance = "";
    $scope.sales = "";
    $scope.customer = "";
    $scope.level = "admin";
  };
  $scope.trigfinance = function() {
    $scope.admin = "";
    $scope.finance = "checked";
    $scope.sales = "";
    $scope.customer = "";
    $scope.level = "finance";
  };
  $scope.trigsales = function() {
    $scope.admin = "";
    $scope.finance = "";
    $scope.sales = "checked";
    $scope.customer = "";
    $scope.level = "sales";
  };
  $scope.trigcustomer = function() {
    $scope.admin = "";
    $scope.finance = "";
    $scope.sales = "";
    $scope.customer = "checked";
    $scope.level = "customer";
  };

  $scope.takepic = function() {
    
    var filesSelected = document.getElementById("nameImg").files;
    if (filesSelected.length > 0) {
      var fileToLoad = filesSelected[0];
      var fileReader = new FileReader();
      fileReader.onload = function(fileLoadedEvent) {
        var textAreaFileContents = document.getElementById(
          "textAreaFileContents"
        );
        $scope.item = {
          photo: fileLoadedEvent.target.result
        };
        PickTransactionServices.updatePhoto($scope.item.photo);
      };

      fileReader.readAsDataURL(fileToLoad);
    }
  };

  $scope.createMember = function (user) {
      var email = user.email;
      var password = user.password;
      var filesSelected = document.getElementById("nameImg").files;
      if (filesSelected.length > 0) {
        var fileToLoad = filesSelected[0];
        var fileReader = new FileReader();
        fileReader.onload = function(fileLoadedEvent) {
          var textAreaFileContents = document.getElementById(
            "textAreaFileContents"
          );
          $scope.item = {
            photo: fileLoadedEvent.target.result
          };
          PickTransactionServices.updatePhoto($scope.item.photo);
        };

        fileReader.readAsDataURL(fileToLoad);
      }

      // Validate form data
      if (typeof user.fullname === 'undefined' || user.fullname === '') {
          $scope.hideValidationMessage = false;
          $scope.validationMessage = "Please enter your name"
          return;
      }
      if (typeof user.email === 'undefined' || user.email === '') {
          $scope.hideValidationMessage = false;
          $scope.validationMessage = "Please enter your email"
          return;
      }
      if (typeof user.password === 'undefined' || user.password === '') {
          $scope.hideValidationMessage = false;
          $scope.validationMessage = "Please enter your password"
          return;
      }

      $ionicLoading.show({
          template: '<ion-spinner icon="ios"></ion-spinner><br>Registering...'
      });

      fb.createUser({
          email: user.email,
          password: user.password
      }, function (error, userData) {
          if (error) {
              switch (error.code) {
                  case "EMAIL_TAKEN":
                      $ionicLoading.hide();
                      $ionicPopup.alert({title: 'Register Failed', template: 'The email entered is already in use!'});
                      break;
                  case "INVALID_EMAIL":
                      $ionicLoading.hide();
                      $ionicPopup.alert({title: 'Register Failed', template: 'The specified email is not a valid email!'});
                      break;
                  default:
                      $ionicLoading.hide();
                      $ionicPopup.alert({title: 'Register Failed', template: 'Oops. Something went wrong!'});
              }
          } else {
              fb.authWithPassword({
                  "email": user.email,
                  "password": user.password
              }, function (error, authData) {
                  if (error) {
                      $ionicLoading.hide();
                      $ionicPopup.alert({title: 'Register Failed', template: 'Error. Login failed!'});
                  } else {

                      /* PREPARE DATA FOR FIREBASE*/
                      var photo = $scope.item.photo;
                      var gender = $scope.gender;
                      var level = $scope.level;
                      $scope.temp = {
                          fullname: user.fullname,
                          picture: photo,
                          email: user.email,
                          gender: gender,
                          level: level,
                          datecreated: Date.now(),
                          dateupdated: Date.now()
                      }

                      /* SAVE MEMBER DATA */
                      var membersref = MembersFactory.ref();
                      var newUser = membersref.child(authData.uid);
                      newUser.update($scope.temp, function (ref) {
                      addImage = newUser.child("images");
                      });
                      MembersFactory.getMember(authData).then(function (thisuser) {
                        /* Save user data for later use */
                        myCache.put('thisUserName', thisuser.fullname);
                        myCache.put('thisMemberId', authData.uid);
                        CurrentUserService.updateUser(thisuser);
                      });

                      $ionicLoading.hide();
                      $state.go('app.dashboard');
                  }
              });
          }
      });
  };
})

.controller('employeeCtrl', function($scope, $state, $stateParams, $ionicHistory, $ionicLoading, MembersFactory, ContactsFactory, CurrentUserService, PickTransactionServices, $ionicPopup, myCache) {

  $scope.user = {'fullname': '','address': '','phone': '','photo': '','picture': ''};
  $scope.item = {'photo': ''};
  $scope.inEditMode = false;

  $scope.$on('$ionicView.beforeEnter', function () {
    if ($scope.user.picture === ""){
       $scope.item.photo = PickTransactionServices.photoSelected;
    } else {
      $scope.item = {'photo': $scope.user.picture};
    }
    if ($scope.user.gender === "male"){
      $scope.male = "checked";
    } 
    else if ($scope.user.gender === "female"){
      $scope.female = "checked";
    }
    if ($scope.user.title === "admin"){
      $scope.admin = "checked";
    } 
    else if ($scope.user.title === "supervisor"){
      $scope.finance = "checked";
    }
    else if ($scope.user.title === "worker"){
      $scope.sales = "checked";
    }
    else if ($scope.user.title === "owner"){
      $scope.customer = "checked";
    }
  });

  if ($stateParams.employeeId === '') {
      //
      // Create Material
      //
      $scope.item = {'photo': ''};
  } else {
      //
      // Edit Material
      //
      var getemployee = ContactsFactory.getEmployee($stateParams.employeeId);
      $scope.inEditMode = true;
      $scope.user = getemployee;
      $scope.item = {'photo': $scope.user.picture};
      $scope.gender = $scope.user.gender;
      $scope.title = $scope.user.title;
      if ($scope.user.gender === "male"){
        $scope.male = "checked";
      } 
      else if ($scope.user.gender === "female"){
        $scope.female = "checked";
      }
      if ($scope.user.title === "admin"){
        $scope.admin = "checked";
      } 
      else if ($scope.user.title === "supervisor"){
        $scope.finance = "checked";
      }
      else if ($scope.user.title === "worker"){
        $scope.sales = "checked";
      }
      else if ($scope.user.title === "owner"){
        $scope.customer = "checked";
      }
  }

  // Gender
  $scope.male = "";
  $scope.female = "";
  $scope.trigmale = function() {
    $scope.male = "checked";
    $scope.female = "";
    $scope.gender = "male";
  };
  $scope.trigfemale = function() {
    $scope.male = "";
    $scope.female = "checked";
    $scope.gender = "female";
  };

  // User Level
  $scope.admin = "";
  $scope.finance = "";
  $scope.sales = "";
  $scope.customer = "";
  $scope.trigadmin = function() {
    $scope.admin = "checked";
    $scope.finance = "";
    $scope.sales = "";
    $scope.customer = "";
    $scope.title = "admin";
  };
  $scope.trigfinance = function() {
    $scope.admin = "";
    $scope.finance = "checked";
    $scope.sales = "";
    $scope.customer = "";
    $scope.title = "supervisor";
  };
  $scope.trigsales = function() {
    $scope.admin = "";
    $scope.finance = "";
    $scope.sales = "checked";
    $scope.customer = "";
    $scope.title = "worker";
  };
  $scope.trigcustomer = function() {
    $scope.admin = "";
    $scope.finance = "";
    $scope.sales = "";
    $scope.customer = "checked";
    $scope.title = "owner";
  };

  $scope.takepic = function() {
    
    var filesSelected = document.getElementById("nameImg").files;
    if (filesSelected.length > 0) {
      var fileToLoad = filesSelected[0];
      var fileReader = new FileReader();
      fileReader.onload = function(fileLoadedEvent) {
        var textAreaFileContents = document.getElementById(
          "textAreaFileContents"
        );
        $scope.item = {
          photo: fileLoadedEvent.target.result
        };
        PickTransactionServices.updatePhoto($scope.item.photo);
      };

      fileReader.readAsDataURL(fileToLoad);
    }
  };

  $scope.createMember = function (user) {
      var email = user.email;
      var password = user.password;
      var filesSelected = document.getElementById("nameImg").files;
      if (filesSelected.length > 0) {
        var fileToLoad = filesSelected[0];
        var fileReader = new FileReader();
        fileReader.onload = function(fileLoadedEvent) {
          var textAreaFileContents = document.getElementById(
            "textAreaFileContents"
          );
          $scope.item = {
            photo: fileLoadedEvent.target.result
          };
          PickTransactionServices.updatePhoto($scope.item.photo);
        };

        fileReader.readAsDataURL(fileToLoad);
      }

      // Validate form data
      if (typeof user.fullname === 'undefined' || user.fullname === '') {
          $scope.hideValidationMessage = false;
          $scope.validationMessage = "Please enter your name"
          return;
      }
      if (typeof user.address === 'undefined' || user.address === '') {
          $scope.hideValidationMessage = false;
          $scope.validationMessage = "Please enter your address"
          return;
      }
      if (typeof user.phone === 'undefined' || user.phone === '') {
          $scope.hideValidationMessage = false;
          $scope.validationMessage = "Please enter your phone"
          return;
      }

      $ionicLoading.show({
          template: '<ion-spinner icon="ios"></ion-spinner><br>Adding...'
      });

      if ($scope.inEditMode) {
        /* PREPARE DATA FOR FIREBASE*/
        var photo = $scope.item.photo;
        var gender = $scope.gender;
        var title = $scope.title;
        $scope.temp = {
            fullname: user.fullname,
            picture: photo,
            address: user.address,
            phone: user.phone,
            gender: gender,
            title: title,
            status: "active",
            datecreated: Date.now(),
            dateupdated: Date.now()
        }

        /* SAVE MEMBER DATA */
        /* SAVE MATERIAL DATA */
        var employeeref = ContactsFactory.eRef();
        var newData = employeeref.child($stateParams.employeeId);
        newData.update($scope.temp, function (ref) {
        });
        $ionicHistory.goBack();
      }else {
        /* PREPARE DATA FOR FIREBASE*/
        var photo = $scope.item.photo;
        var gender = $scope.gender;
        var title = $scope.title;
        $scope.temp = {
            fullname: user.fullname,
            picture: photo,
            address: user.address,
            phone: user.phone,
            gender: gender,
            title: title,
            status: "active",
            datecreated: Date.now(),
            dateupdated: Date.now()
        }

        /* SAVE MEMBER DATA */
        var ref = fb.child("employees");
        ref.push($scope.temp);
      }

      $ionicLoading.hide();
      refresh($scope.user, $scope);
  };

  function refresh(user, $scope, item) {

    $scope.user = {'fullname': '','address': '','phone': '','photo': '','picture': ''};
    $scope.item = {'photo': ''};
    $scope.male = "";
    $scope.female = "";
    $scope.admin = "";
    $scope.finance = "";
    $scope.sales = "";
    $scope.customer = "";
  }
})

.controller('inventoryCtrl', function($scope, $state, $ionicLoading, MasterFactory, $ionicPopup, myCache) {

  $scope.inventories = [];

  $scope.inventories = MasterFactory.getInventories();
  $scope.inventories.$loaded().then(function (x) {
    refresh($scope.inventories, $scope, MasterFactory);
  }).catch(function (error) {
      console.error("Error:", error);
  });

  $scope.$on('$ionicView.beforeEnter', function () {
    refresh($scope.inventories, $scope);
  });

  $scope.edit = function(item) {
    $state.go('app.rawinventory', { inventoryId: item.$id });
  };

  function refresh(inventories, $scope, item) {
  }
})

.controller('addinventoryCtrl', function($scope, $state, $ionicLoading, MasterFactory, CurrentUserService, PickTransactionServices, $ionicPopup, myCache) {

  $scope.inventory = {'name': '','jumlah': '','harga': '','photo': '','picture': ''};
  $scope.item = {'photo': ''};

  $scope.$on('$ionicView.beforeEnter', function () {
    $scope.item.photo = PickTransactionServices.photoSelected;
  });

  $scope.takepic = function() {
    
    var filesSelected = document.getElementById("nameImg").files;
    if (filesSelected.length > 0) {
      var fileToLoad = filesSelected[0];
      var fileReader = new FileReader();
      fileReader.onload = function(fileLoadedEvent) {
        var textAreaFileContents = document.getElementById(
          "textAreaFileContents"
        );
        $scope.item = {
          photo: fileLoadedEvent.target.result
        };
        PickTransactionServices.updatePhoto($scope.item.photo);
      };

      fileReader.readAsDataURL(fileToLoad);
    }
  };

  $scope.createInventory = function (inventory) {
      var filesSelected = document.getElementById("nameImg").files;
      if (filesSelected.length > 0) {
        var fileToLoad = filesSelected[0];
        var fileReader = new FileReader();
        fileReader.onload = function(fileLoadedEvent) {
          var textAreaFileContents = document.getElementById(
            "textAreaFileContents"
          );
          $scope.item = {
            photo: fileLoadedEvent.target.result
          };
        };

        fileReader.readAsDataURL(fileToLoad);
      }

      // Validate form data
      if (typeof inventory.name === 'undefined' || inventory.name === '') {
          $scope.hideValidationMessage = false;
          $scope.validationMessage = "Please enter name"
          return;
      }
      if (typeof inventory.jumlah === 'undefined' || inventory.jumlah === '') {
          $scope.hideValidationMessage = false;
          $scope.validationMessage = "Please enter jumlah"
          return;
      }
      if (typeof inventory.harga === 'undefined' || inventory.harga === '') {
          $scope.hideValidationMessage = false;
          $scope.validationMessage = "Please enter harga"
          return;
      }

      $ionicLoading.show({
          template: '<ion-spinner icon="ios"></ion-spinner><br>Adding...'
      });

      /* PREPARE DATA FOR FIREBASE*/
      var photo = $scope.item.photo;
      $scope.temp = {
          name: inventory.name,
          picture: photo,
          harga: inventory.harga,
          stock: inventory.jumlah,
          addedby: CurrentUserService.fullname,
          datecreated: Date.now(),
          dateupdated: Date.now()
      }

      /* SAVE MEMBER DATA */
      var ref = fb.child("master").child("inventory");
      ref.push($scope.temp);

      $ionicLoading.hide();
      refresh($scope.inventory, $scope);
  };

  function refresh(inventory, $scope, item) {

    $scope.inventory = {'name': '','berat': '','harga': '','picture': ''};
    $scope.item = {'photo': ''};
  }
})

.controller('rawinventoryCtrl', function($scope, $state, $stateParams, $ionicLoading, $ionicHistory, MasterFactory, CurrentUserService, PickTransactionServices, $ionicPopup, myCache) {

  $scope.inventory = {'name': '','jumlah': '','harga': '','photo': '','picture': ''};
  $scope.item = {'photo': ''};
  $scope.inEditMode = false;
  var getinventory = MasterFactory.getInventory($stateParams.inventoryId);
  $scope.stock = getinventory.jumlah;

  if ($stateParams.inventoryId === '') {
      //
      // Create Material
      //
      $scope.item = {'photo': ''};
  } else {
      //
      // Edit Material
      //
      var getinventory = MasterFactory.getInventory($stateParams.inventoryId);
      $scope.inEditMode = true;
      $scope.inventory = getinventory;
      $scope.inventory.jumlah = "";
      $scope.stock = $scope.inventory.stock;
      $scope.item = {'photo': $scope.inventory.picture};
  }

  $scope.myFunc = function() {
    if($scope.inventory.jumlah !== undefined){
      $scope.stock = parseFloat($scope.inventory.jumlah) + parseFloat($scope.inventory.stock);
    } else {
      $scope.stock = $scope.inventory.stock;
    }
    
  };

  $scope.$on('$ionicView.beforeEnter', function () {
    $scope.inventory = getinventory;
    $scope.stock = $scope.inventory.stock;
    $scope.item = {'photo': $scope.inventory.picture};
  });

  $scope.takepic = function() {
    
    var filesSelected = document.getElementById("nameImg").files;
    if (filesSelected.length > 0) {
      var fileToLoad = filesSelected[0];
      var fileReader = new FileReader();
      fileReader.onload = function(fileLoadedEvent) {
        var textAreaFileContents = document.getElementById(
          "textAreaFileContents"
        );
        $scope.item = {
          photo: fileLoadedEvent.target.result
        };
      };

      fileReader.readAsDataURL(fileToLoad);
    }
  };

  $scope.createInventory = function () {
      var filesSelected = document.getElementById("nameImg").files;
      if (filesSelected.length > 0) {
        var fileToLoad = filesSelected[0];
        var fileReader = new FileReader();
        fileReader.onload = function(fileLoadedEvent) {
          var textAreaFileContents = document.getElementById(
            "textAreaFileContents"
          );
          $scope.item = {
            photo: fileLoadedEvent.target.result
          };
        };

        fileReader.readAsDataURL(fileToLoad);
      }

      // Validate form data
      if (typeof $scope.inventory.name === 'undefined' || $scope.inventory.name === '') {
          $scope.hideValidationMessage = false;
          $scope.validationMessage = "Please enter name"
          return;
      }
      if (typeof $scope.inventory.jumlah === 'undefined' || $scope.inventory.jumlah === '') {
          $scope.hideValidationMessage = false;
          $scope.validationMessage = "Please enter jumlah"
          return;
      }
      if (typeof $scope.inventory.harga === 'undefined' || $scope.inventory.harga === '') {
          $scope.hideValidationMessage = false;
          $scope.validationMessage = "Please enter harga"
          return;
      }

      $ionicLoading.show({
          template: '<ion-spinner icon="ios"></ion-spinner><br>Editing...'
      });

      /* PREPARE DATA FOR FIREBASE*/
      var photo = $scope.item.photo;
      var currentstock = $scope.stock;
      $scope.temp = {
          name: $scope.inventory.name,
          picture: photo,
          harga: $scope.inventory.harga,
          stock: currentstock,
          addedby: CurrentUserService.fullname,
          datecreated: Date.now(),
          dateupdated: Date.now()
      }

      /* SAVE MATERIAL DATA */
      var inventoryref = MasterFactory.iRef();
      var newData = inventoryref.child($stateParams.inventoryId);
      newData.update($scope.temp, function (ref) {
      });

      $scope.temp = {};
      $ionicLoading.hide();
      refresh($scope.inventory, $scope.temp, $scope);
      $ionicHistory.goBack();
  };

  function refresh(temp, inventory, $scope, item) {

    $scope.inventory = {'name': '','jumlah': '','harga': '','picture': ''};
    $scope.item = {'photo': ''};
    $scope.stock = "";
    $scope.temp = {};
  }
})

.controller('materialCtrl', function($scope, $state, $ionicLoading, MasterFactory, $ionicPopup, myCache) {

  $scope.materials = [];

  $scope.materials = MasterFactory.getMaterials();
  $scope.materials.$loaded().then(function (x) {
    refresh($scope.materials, $scope, MasterFactory);
  }).catch(function (error) {
      console.error("Error:", error);
  });

  $scope.$on('$ionicView.beforeEnter', function () {
    refresh($scope.materials, $scope);
  });

  $scope.edit = function(item) {
    $state.go('app.rawmaterial', { materialId: item.$id });
  };

  function refresh(materials, $scope, item) {
  }
})

.controller('addmaterialCtrl', function($scope, $state, $ionicLoading, MasterFactory, CurrentUserService, PickTransactionServices, $ionicPopup, myCache) {

  $scope.material = {'jenis': '','berat': '','harga': '','photo': '','picture': ''};
  $scope.item = {'photo': ''};

  $scope.$on('$ionicView.beforeEnter', function () {
    $scope.item.photo = PickTransactionServices.photoSelected;
  });

  $scope.takepic = function() {
    
    var filesSelected = document.getElementById("nameImg").files;
    if (filesSelected.length > 0) {
      var fileToLoad = filesSelected[0];
      var fileReader = new FileReader();
      fileReader.onload = function(fileLoadedEvent) {
        var textAreaFileContents = document.getElementById(
          "textAreaFileContents"
        );
        $scope.item = {
          photo: fileLoadedEvent.target.result
        };
        PickTransactionServices.updatePhoto($scope.item.photo);
      };

      fileReader.readAsDataURL(fileToLoad);
    }
  };

  $scope.createMaterial = function (material) {
      var filesSelected = document.getElementById("nameImg").files;
      if (filesSelected.length > 0) {
        var fileToLoad = filesSelected[0];
        var fileReader = new FileReader();
        fileReader.onload = function(fileLoadedEvent) {
          var textAreaFileContents = document.getElementById(
            "textAreaFileContents"
          );
          $scope.item = {
            photo: fileLoadedEvent.target.result
          };
        };

        fileReader.readAsDataURL(fileToLoad);
      }

      // Validate form data
      if (typeof material.jenis === 'undefined' || material.jenis === '') {
          $scope.hideValidationMessage = false;
          $scope.validationMessage = "Please enter jenis"
          return;
      }
      if (typeof material.berat === 'undefined' || material.berat === '') {
          $scope.hideValidationMessage = false;
          $scope.validationMessage = "Please enter berat"
          return;
      }
      if (typeof material.harga === 'undefined' || material.harga === '') {
          $scope.hideValidationMessage = false;
          $scope.validationMessage = "Please enter harga"
          return;
      }

      $ionicLoading.show({
          template: '<ion-spinner icon="ios"></ion-spinner><br>Adding...'
      });

      /* PREPARE DATA FOR FIREBASE*/
      var photo = $scope.item.photo;
      $scope.temp = {
          jenis: material.jenis,
          picture: photo,
          harga: material.harga,
          stock: material.berat,
          addedby: CurrentUserService.fullname,
          datecreated: Date.now(),
          dateupdated: Date.now()
      }

      /* SAVE MEMBER DATA */
      var ref = fb.child("master").child("material");
      ref.push($scope.temp);

      $ionicLoading.hide();
      refresh($scope.material, $scope);
  };

  function refresh(material, $scope, item) {

    $scope.material = {'jenis': '','berat': '','harga': '','picture': ''};
    $scope.item = {'photo': ''};
  }
})

.controller('rawmaterialCtrl', function($scope, $state, $stateParams, $ionicLoading, $ionicHistory, MasterFactory, CurrentUserService, PickTransactionServices, $ionicPopup, myCache) {

  $scope.material = {'jenis': '','berat': '','harga': '','photo': '','picture': ''};
  $scope.item = {'photo': ''};
  $scope.inEditMode = false;
  var getmaterial = MasterFactory.getMaterial($stateParams.materialId);
  $scope.stock = getmaterial.berat;

  if ($stateParams.materialId === '') {
      //
      // Create Material
      //
      $scope.item = {'photo': ''};
  } else {
      //
      // Edit Material
      //
      var getmaterial = MasterFactory.getMaterial($stateParams.materialId);
      $scope.inEditMode = true;
      $scope.material = getmaterial;
      $scope.material.berat = "";
      $scope.stock = $scope.material.stock;
      $scope.item = {'photo': $scope.material.picture};
  }

  $scope.myFunc = function() {
    if($scope.material.berat !== undefined){
      $scope.stock = parseFloat($scope.material.berat) + parseFloat($scope.material.stock);
    } else {
      $scope.stock = $scope.material.stock;
    }
    
  };

  $scope.$on('$ionicView.beforeEnter', function () {
    $scope.material = getmaterial;
    $scope.stock = $scope.material.stock;
    $scope.item = {'photo': $scope.material.picture};
  });

  $scope.takepic = function() {
    
    var filesSelected = document.getElementById("nameImg").files;
    if (filesSelected.length > 0) {
      var fileToLoad = filesSelected[0];
      var fileReader = new FileReader();
      fileReader.onload = function(fileLoadedEvent) {
        var textAreaFileContents = document.getElementById(
          "textAreaFileContents"
        );
        $scope.item = {
          photo: fileLoadedEvent.target.result
        };
      };

      fileReader.readAsDataURL(fileToLoad);
    }
  };

  $scope.createMaterial = function () {
      var filesSelected = document.getElementById("nameImg").files;
      if (filesSelected.length > 0) {
        var fileToLoad = filesSelected[0];
        var fileReader = new FileReader();
        fileReader.onload = function(fileLoadedEvent) {
          var textAreaFileContents = document.getElementById(
            "textAreaFileContents"
          );
          $scope.item = {
            photo: fileLoadedEvent.target.result
          };
        };

        fileReader.readAsDataURL(fileToLoad);
      }

      // Validate form data
      if (typeof $scope.material.jenis === 'undefined' || $scope.material.jenis === '') {
          $scope.hideValidationMessage = false;
          $scope.validationMessage = "Please enter jenis"
          return;
      }
      if (typeof $scope.material.berat === 'undefined' || $scope.material.berat === '') {
          $scope.hideValidationMessage = false;
          $scope.validationMessage = "Please enter berat"
          return;
      }
      if (typeof $scope.material.harga === 'undefined' || $scope.material.harga === '') {
          $scope.hideValidationMessage = false;
          $scope.validationMessage = "Please enter harga"
          return;
      }

      $ionicLoading.show({
          template: '<ion-spinner icon="ios"></ion-spinner><br>Editing...'
      });

      /* PREPARE DATA FOR FIREBASE*/
      var photo = $scope.item.photo;
      var currentstock = $scope.stock;
      $scope.temp = {
          jenis: $scope.material.jenis,
          picture: photo,
          harga: $scope.material.harga,
          stock: currentstock,
          addedby: CurrentUserService.fullname,
          datecreated: Date.now(),
          dateupdated: Date.now()
      }

      /* SAVE MATERIAL DATA */
      var materialref = MasterFactory.mRef();
      var newData = materialref.child($stateParams.materialId);
      newData.update($scope.temp, function (ref) {
      });

      $scope.temp = {};
      $ionicLoading.hide();
      refresh($scope.material, $scope.temp, $scope);
      $ionicHistory.goBack();
  };

  function refresh(temp, material, $scope, item) {

    $scope.material = {'jenis': '','berat': '','harga': '','picture': ''};
    $scope.item = {'photo': ''};
    $scope.stock = "";
    $scope.temp = {};
  }
})

.controller('contactCtrl', function($scope, $state, $ionicLoading, ContactsFactory, $ionicPopup, myCache) {

  $scope.contacts = [];

  $scope.contacts = ContactsFactory.getContacts();
  $scope.contacts.$loaded().then(function (x) {
    refresh($scope.contacts, $scope, ContactsFactory);
  }).catch(function (error) {
      console.error("Error:", error);
  });

  $scope.$on('$ionicView.beforeEnter', function () {
    refresh($scope.contacts, $scope);
  });

  $scope.edit = function(item) {
    $state.go('app.employee', { employeeId: item.$id });
  };

  function refresh(contacts, $scope, item) {
  }
})

.controller('profileCtrl', function($scope, $state, $ionicLoading, MembersFactory, CurrentUserService, PickTransactionServices, $ionicPopup, myCache) {

  $scope.fullname = CurrentUserService.fullname;
  $scope.photo = CurrentUserService.picture;
  $scope.level = CurrentUserService.level;
  $scope.user = {};
  $scope.item = {'photo': ''};

  // Gender
  $scope.male = "";
  $scope.female = "";
  $scope.trigmale = function() {
    $scope.male = "checked";
    $scope.female = "";
    $scope.gender = "male";
  };
  $scope.trigfemale = function() {
    $scope.male = "";
    $scope.female = "checked";
    $scope.gender = "female";
  };

  // User Level
  $scope.admin = "";
  $scope.finance = "";
  $scope.sales = "";
  $scope.customer = "";
  $scope.trigadmin = function() {
    $scope.admin = "checked";
    $scope.finance = "";
    $scope.sales = "";
    $scope.customer = "";
    $scope.level = "admin";
  };
  $scope.trigfinance = function() {
    $scope.admin = "";
    $scope.finance = "checked";
    $scope.sales = "";
    $scope.customer = "";
    $scope.level = "finance";
  };
  $scope.trigsales = function() {
    $scope.admin = "";
    $scope.finance = "";
    $scope.sales = "checked";
    $scope.customer = "";
    $scope.level = "sales";
  };
  $scope.trigcustomer = function() {
    $scope.admin = "";
    $scope.finance = "";
    $scope.sales = "";
    $scope.customer = "checked";
    $scope.level = "customer";
  };

  $scope.test = function() {
    $ionicLoading.show({
          template: '<ion-spinner icon="ios"></ion-spinner><br>Registering...'
      });
  };

  $scope.createMember = function (user) {
      var email = user.email;
      var password = user.password;
      var filesSelected = document.getElementById("nameImg").files;
      if (filesSelected.length > 0) {
        var fileToLoad = filesSelected[0];
        var fileReader = new FileReader();
        fileReader.onload = function(fileLoadedEvent) {
          var textAreaFileContents = document.getElementById(
            "textAreaFileContents"
          );
          $scope.item = {
            photo: fileLoadedEvent.target.result
          };
        };

        fileReader.readAsDataURL(fileToLoad);
      }

      // Validate form data
      if (typeof user.fullname === 'undefined' || user.fullname === '') {
          $scope.hideValidationMessage = false;
          $scope.validationMessage = "Please enter your name"
          return;
      }
      if (typeof user.email === 'undefined' || user.email === '') {
          $scope.hideValidationMessage = false;
          $scope.validationMessage = "Please enter your email"
          return;
      }
      if (typeof user.password === 'undefined' || user.password === '') {
          $scope.hideValidationMessage = false;
          $scope.validationMessage = "Please enter your password"
          return;
      }

      $ionicLoading.show({
          template: '<ion-spinner icon="ios"></ion-spinner><br>Registering...'
      });

      fb.createUser({
          email: user.email,
          password: user.password
      }, function (error, userData) {
          if (error) {
              switch (error.code) {
                  case "EMAIL_TAKEN":
                      $ionicLoading.hide();
                      $ionicPopup.alert({title: 'Register Failed', template: 'The email entered is already in use!'});
                      break;
                  case "INVALID_EMAIL":
                      $ionicLoading.hide();
                      $ionicPopup.alert({title: 'Register Failed', template: 'The specified email is not a valid email!'});
                      break;
                  default:
                      $ionicLoading.hide();
                      $ionicPopup.alert({title: 'Register Failed', template: 'Oops. Something went wrong!'});
              }
          } else {
              fb.authWithPassword({
                  "email": user.email,
                  "password": user.password
              }, function (error, authData) {
                  if (error) {
                      $ionicLoading.hide();
                      $ionicPopup.alert({title: 'Register Failed', template: 'Error. Login failed!'});
                  } else {

                      /* PREPARE DATA FOR FIREBASE*/
                      var photo = $scope.item.photo;
                      var gender = $scope.gender;
                      var level = $scope.level;
                      $scope.temp = {
                          fullname: user.fullname,
                          picture: photo,
                          email: user.email,
                          gender: gender,
                          level: level,
                          datecreated: Date.now(),
                          dateupdated: Date.now()
                      }

                      /* SAVE MEMBER DATA */
                      var membersref = MembersFactory.ref();
                      var newUser = membersref.child(authData.uid);
                      newUser.update($scope.temp, function (ref) {
                      addImage = newUser.child("images");
                      });
                      MembersFactory.getMember(authData).then(function (thisuser) {
                        /* Save user data for later use */
                        myCache.put('thisUserName', thisuser.fullname);
                        myCache.put('thisMemberId', authData.uid);
                        CurrentUserService.updateUser(thisuser);
                      });

                      $ionicLoading.hide();
                      $state.go('app.playlists');
                  }
              });
          }
      });
  };
})

.controller('loginCtrl', function($scope, $rootScope, $stateParams, $ionicHistory, $cacheFactory, $ionicLoading, $ionicPopup, $state, MembersFactory, myCache, CurrentUserService) {

  $scope.user = {};
    $scope.doLogIn = function (user) {
        $ionicLoading.show({
            template: '<ion-spinner icon="ios"></ion-spinner><br>Loggin In...'
        });

        /* Check user fields*/
        if (!user.email || !user.password) {
            $ionicLoading.hide();
            $ionicPopup.alert({title: 'Login Failed', template: 'Please check your Email or Password!'});
            return;
        }

        /* Authenticate User */
        fb.authWithPassword({
            "email": user.email,
            "password": user.password
        }, function (error, authData) {
            if (error) {
                //console.log("Login Failed!", error);
                $ionicLoading.hide();
                $ionicPopup.alert({title: 'Login Failed', template: 'Check your credentials and try again!'});
            } else {
                
                MembersFactory.getMember(authData).then(function (thisuser) {
                    
                    /* Save user data for later use */
                    myCache.put('thisUserName', thisuser.fullname);
                    myCache.put('thisUserLevel', thisuser.level);
                    myCache.put('thisMemberId', authData.uid);
                    CurrentUserService.updateUser(thisuser);
                        $ionicLoading.hide();
                        $state.go('app.dashboard', { memberId: authData.uid, level: thisuser.level });
                });
            }
        });
    }
})

.controller('PlaylistCtrl', function($scope, $stateParams) {
});
