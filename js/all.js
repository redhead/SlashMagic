var DamageTable;

DamageTable = (function() {
  function DamageTable() {}

  DamageTable.table = {
    '-20': 0,
    '-19': 0,
    '-18': 0,
    '-17': 0,
    '-16': 0,
    '-15': 0,
    '-14': 0,
    '-13': 0,
    '-12': 0,
    '-11': 0,
    '-10': 1,
    '-9': 1,
    '-8': 1,
    '-7': 1,
    '-6': 2,
    '-5': 2,
    '-4': 2,
    '-3': 2,
    '-2': 3,
    '-1': 3,
    '0': 3,
    '1': 4,
    '2': 4,
    '3': 5,
    '4': 5,
    '5': 6,
    '6': 6,
    '7': 7,
    '8': 8,
    '9': 9,
    '10': 10,
    '11': 11,
    '12': 12,
    '13': 14,
    '14': 16,
    '15': 18,
    '16': 20,
    '17': 22,
    '18': 25,
    '19': 28,
    '20': 32,
    '21': 36,
    '22': 40,
    '23': 45,
    '24': 50,
    '25': 56,
    '26': 63,
    '27': 70,
    '28': 80,
    '29': 90,
    '30': 100,
    '31': 110,
    '32': 120,
    '33': 140,
    '34': 160,
    '35': 180,
    '36': 200,
    '37': 220,
    '38': 250,
    '39': 280,
    '40': 320,
    '41': 360,
    '42': 400,
    '43': 450,
    '44': 500,
    '45': 560,
    '46': 630,
    '47': 700,
    '48': 800,
    '49': 900,
    '50': 1000,
    '51': 1100,
    '52': 1200,
    '53': 1400,
    '54': 1600,
    '55': 1800,
    '56': 2000,
    '57': 2200,
    '58': 2500,
    '59': 2800,
    '60': 3200,
    '61': 3600,
    '62': 4000,
    '63': 4500,
    '64': 5000,
    '65': 5600,
    '66': 6300,
    '67': 7000,
    '68': 8000,
    '69': 9000,
    '70': 10000,
    '71': 11000,
    '72': 12000,
    '73': 14000,
    '74': 16000,
    '75': 18000,
    '76': 20000,
    '77': 22000,
    '78': 25000,
    '79': 28000
  };

  DamageTable.getPoints = function(bonus) {
    return this.table["" + bonus];
  };

  return DamageTable;

})();

var SM;

SM = SM || {};

SM.database = SM.database || {};

SM.database.armors = {
  "Beze zbroje": {
    strengthNeed: null,
    restriction: 0,
    protection: 0,
    weight: 0
  },
  "Prošívaná zbroj": {
    strengthNeed: -2,
    restriction: 0,
    protection: 2,
    weight: 4
  },
  "Kožená zbroj": {
    strengthNeed: 1,
    restriction: 0,
    protection: 3,
    weight: 6
  },
  "Pobíjená zbroj": {
    strengthNeed: 3,
    restriction: 0,
    protection: 4,
    weight: 8
  },
  "Kroužková zbroj": {
    strengthNeed: 5,
    restriction: -1,
    protection: 6,
    weight: 15
  },
  "Šupinová zbroj": {
    strengthNeed: 7,
    restriction: -2,
    protection: 7,
    weight: 20
  },
  "Plátová zbroj": {
    strengthNeed: 10,
    restriction: -3,
    protection: 9,
    weight: 30
  },
  "Plná plátová zbroj": {
    strengthNeed: 12,
    restriction: -4,
    protection: 10,
    weight: 35
  }
};

SM.database.helmets = {
  "Bez pokrývky hlavy": {
    strengthNeed: null,
    restriction: 0,
    protection: 0,
    weight: 0
  },
  "Kožená čapka": {
    strengthNeed: 0,
    restriction: 0,
    protection: 1,
    weight: 0.3
  },
  "Kroužková kukla": {
    strengthNeed: 2,
    restriction: 0,
    protection: 2,
    weight: 2
  },
  "Konická přilba": {
    strengthNeed: 3,
    restriction: -1,
    protection: 3,
    weight: 1.5
  },
  "Plná přilba": {
    strengthNeed: 4,
    restriction: -1,
    protection: 4,
    weight: 2
  },
  "Hrncová přilba": {
    strengthNeed: 5,
    restriction: -2,
    protection: 5,
    weight: 3
  },
  "Kbelcová přilba": {
    strengthNeed: 7,
    restriction: -3,
    protection: 7,
    weight: 4
  }
};

SM.database.items = {
  "Kožená torna": {
    name: "Kožená torna",
    weight: 1,
    price: 4,
    category: "Zavazadla"
  },
  "Vak (do 5 kg)": {
    name: "Vak (do 5 kg)",
    weight: 0.4,
    price: 1,
    category: "Zavazadla"
  },
  "Malý batoh (do 10 kg)": {
    name: "Malý batoh (do 10 kg)",
    weight: 0.5,
    price: 8,
    category: "Zavazadla"
  },
  "Velký batoh (do 20 kg)": {
    name: "Velký batoh (do 20 kg)",
    weight: 0.75,
    price: 15,
    category: "Zavazadla"
  },
  "Měšec": {
    name: "Měšec",
    weight: 0.2,
    price: 1.2,
    category: "Ostatní"
  },
  "Přikrývka": {
    name: "Přikrývka",
    weight: 1.5,
    price: 6,
    category: "Na spaní"
  },
  "Spací vak": {
    name: "Spací vak",
    weight: 2,
    price: 12,
    category: "Na spaní"
  },
  "Velký měch (1 l)": {
    name: "Velký měch (1 l)",
    weight: 0.5,
    price: 2.2,
    category: "Nádoby"
  },
  "Malý měch (0,5 l)": {
    name: "Malý měch (0,5 l)",
    weight: 0.25,
    price: 1.5,
    category: "Nádoby"
  },
  "Flakónek (0,2 l)": {
    name: "Flakónek (0,2 l)",
    weight: 0.1,
    price: 12.5,
    category: "Nádoby"
  },
  "Skleněná láhev (0,5 l)": {
    name: "Skleněná láhev (0,5 l)",
    weight: 0.2,
    price: 7.5,
    category: "Nádoby"
  },
  "Malý soudek (5 l)": {
    name: "Malý soudek (5 l)",
    weight: 2,
    price: 3.5,
    category: "Nádoby"
  },
  "Velký sud (20 l)": {
    name: "Velký sud (20 l)",
    weight: 8,
    price: 5,
    category: "Nádoby"
  },
  "Ampulka": {
    name: "Ampulka",
    weight: 0.05,
    price: 5,
    category: "Nádoby"
  },
  "Křesadlo a troud": {
    name: "Křesadlo a troud",
    weight: 0.1,
    price: 0.5,
    category: "Světlo a oheň"
  },
  "Křída": {
    name: "Křída",
    weight: 0.05,
    price: 0.3,
    category: "Na psaní"
  },
  "Brk": {
    name: "Brk",
    weight: 0.05,
    price: 0.5,
    category: "Na psaní"
  },
  "Inkoust (0,1 l)": {
    name: "Inkoust (0,1 l)",
    weight: 0.1,
    price: 5,
    category: "Na psaní"
  },
  "Kalamář": {
    name: "Kalamář",
    weight: 0.1,
    price: 5,
    category: "Na psaní"
  },
  "Pergamen (24x18 cm)": {
    name: "Pergamen (24x18 cm)",
    weight: 0.1,
    price: 2.5,
    category: "Na psaní"
  },
  "Papyrus (24x18 cm)": {
    name: "Papyrus (24x18 cm)",
    weight: 0.02,
    price: 0.5,
    category: "Na psaní"
  },
  "Svíčka": {
    name: "Svíčka",
    weight: 0.05,
    price: 0.3,
    category: "Světlo a oheň"
  },
  "Pochodeň": {
    name: "Pochodeň",
    weight: 0.75,
    price: 0.2,
    category: "Světlo a oheň"
  },
  "Lucerna (0,5 l)": {
    name: "Lucerna (0,5 l)",
    weight: 1,
    price: 10,
    category: "Světlo a oheň"
  },
  "Stíněná lucerna": {
    name: "Stíněná lucerna",
    weight: 1.25,
    price: 14,
    category: "Světlo a oheň"
  },
  "Olej, dávka do lucerny (0, 5 l)": {
    name: "Olej, dávka do lucerny (0, 5 l)",
    weight: 0.5,
    price: 1,
    category: "Světlo a oheň"
  },
  "Provaz (10 m)": {
    name: "Provaz (10 m)",
    weight: 2,
    price: 1,
    category: "Ostatní"
  }
};

var attrPopupLinker, module;

module = angular.module('app', ['ui.bootstrap', 'ui.router', 'localytics.directives']);

module.config(function($stateProvider, $urlRouterProvider, $locationProvider) {
  $locationProvider.html5Mode(false);
  $urlRouterProvider.otherwise('/');
  return $stateProvider.state('main', {
    url: '/',
    templateUrl: 'partials/main.html'
  }).state('main.attributes', {
    url: 'vlastnosti',
    templateUrl: 'partials/tabs/attributes.html'
  }).state('main.combat', {
    url: 'boj',
    templateUrl: 'partials/tabs/combat.html'
  }).state('main.travel', {
    url: 'na-cesty',
    templateUrl: 'partials/tabs/travel.html'
  }).state('main.equipment', {
    url: 'vybava',
    templateUrl: 'partials/tabs/equipment.html'
  }).state('main.skills', {
    url: 'dovednosti',
    templateUrl: 'partials/tabs/skills.html'
  });
});

module.run(function($rootScope, $timeout, $state, $stateParams) {
  window.addEventListener('online', function() {
    return $rootScope.$broadcast('app.online');
  });
  window.addEventListener('offline', function() {
    return $rootScope.$broadcast('app.offline');
  });
  return $timeout((function() {
    var status;
    status = navigator.onLine ? 'app.online' : 'app.offline';
    return $rootScope.$broadcast(status);
  }), 0);
});

module.directive('genderIcon', function() {
  return {
    restrict: 'EA',
    scope: {
      character: '='
    },
    replace: true,
    template: '<span class="gender"></span>',
    link: function($scope, $el, $attrs) {
      var char;
      char = $scope.character.male ? '♂' : '♀';
      return $el.html(char);
    }
  };
});

module.directive('gold', function() {
  return {
    restrict: 'EA',
    scope: {
      count: '='
    },
    replace: true,
    template: '<span><ng:pluralize count="count" when="when" /></span>',
    compile: function() {
      return {
        pre: function($scope) {
          return $scope.when = {
            '0': '0 zlatých',
            '1': '{{count|number}} zlatý',
            'few': '{{count|number}} zlaté',
            'other': '{{count|number}} zlatých'
          };
        }
      };
    }
  };
});

attrPopupLinker = function($scope, el, attrs) {
  var $el;
  $scope.attrName = attrs.name;
  $el = $(el);
  $el.on('mouseenter', function() {
    var $popup, actualHeight, actualWidth, pos;
    $scope.$apply(function() {
      return $scope.$emit('showAttrTooltipRise', $scope.attr);
    });
    $popup = $('#attr-popup');
    $popup.show();
    pos = $el.offset();
    pos.width = $el[0].offsetWidth;
    pos.height = $el[0].offsetHeight;
    actualWidth = $popup[0].offsetWidth;
    actualHeight = $popup[0].offsetHeight;
    return $popup.css({
      top: pos.top - actualHeight,
      left: pos.left + pos.width / 2 - actualWidth / 2
    });
  });
  return $el.on('mouseleave', function() {
    return $('#attr-popup').hide();
  });
};

module.directive('attrRow', function() {
  return {
    restrict: 'A',
    scope: true,
    replace: true,
    isolate: false,
    template: '<div class="row">' + '<div class="col-xs-9">{{attributes.names[attr]}}</div>' + '<div class="col-xs-3">{{character.corrAttr(attr) | attr}}</div>' + '</div>',
    link: attrPopupLinker
  };
});

module.directive('attr', function() {
  return {
    restrict: 'E',
    scope: true,
    replace: true,
    isolate: false,
    template: '<span>{{character.corrAttr(attrName) | attr}}</span>',
    link: attrPopupLinker
  };
});

module.directive('damageFatigueBars', function() {
  return {
    restrict: 'EA',
    scope: true,
    templateUrl: 'partials/damageFatigueBars.html',
    controller: 'DamageFatigueController',
    link: function($scope, el, attrs, controller) {
      return $scope.type = attrs.type;
    }
  };
});

module.directive('autofocus', function() {
  return {
    restrict: 'A',
    link: function($scope, el) {
      return $(el).focus();
    }
  };
});

module.service('Character', [
  '$rootScope', 'characterStorage', function($rootScope, characterStorage) {
    return CharacterService($rootScope, characterStorage.getLast());
  }
]);

module.service('confirm', [
  '$modal', function($modal) {
    return {
      show: function(leadText, text, buttons, callback) {
        return $modal.open({
          templateUrl: 'partials/confirm.html',
          controller: 'ConfirmModalController',
          resolve: {
            leadText: function() {
              return leadText;
            },
            text: function() {
              return text;
            },
            buttons: function() {
              return buttons;
            }
          }
        });
      }
    };
  }
]);

module.filter('attr', function() {
  return function(input) {
    if (input > 0) {
      return '+' + input;
    } else {
      return input;
    }
  };
});

module.filter('attrLong', function() {
  return function(input) {
    return Attributes.names[input];
  };
});

module.filter('formula', function() {
  return function(formula) {
    var m;
    if (formula == null) {
      return;
    }
    if (!(m = formula.match(/:(d|n)$/))) {
      return formula;
    }
    formula = formula.substring(0, formula.length - 2);
    return formula + (m[1] === 'n' ? " (nahoru)" : " (dolů)");
  };
});

module.factory('storage', function() {
  return new Storage;
});

module.factory('characterStorage', function(storage) {
  return new CharacterStorage(storage);
});

module.factory('growler', function(storage) {
  var show;
  show = function(message, type) {
    var options;
    options = {
      ele: 'body',
      align: 'right',
      offset: {
        from: 'bottom',
        amount: 20
      },
      type: type
    };
    if (typeof message !== 'string') {
      message = "<h4>" + message.title + "</h4>" + message.message;
    } else {
      message = "" + message;
    }
    return $.bootstrapGrowl(message, options);
  };
  return {
    success: function(message) {
      return show(message, 'success');
    },
    error: function(message) {
      return show(message, 'danger');
    },
    danger: function(message) {
      return show(message, 'danger');
    },
    info: function(message) {
      return show(message, 'info');
    }
  };
});

var NewCharacterAttrsController, NewCharacterBackgroundController, NewCharacterController, NewCharacterSkillsController;

NewCharacterController = function($scope, $modalInstance, $timeout) {
  var reset;
  $scope.cancel = function() {
    return $modalInstance.dismiss('cancel');
  };
  $scope.races = Races.names;
  $scope.professions = Professions.names;
  $scope.pages = ['Základní', 'Vlastnosti', 'Zázemí', 'Dovednosti'];
  $scope.part = 0;
  $scope.model = {
    uniqueness: 2,
    skillPoints: {
      physical: 0,
      psychic: 0,
      combined: 0
    }
  };
  $scope.newCharacter = {
    name: '',
    male: true,
    race: $scope.races[0],
    profession: $scope.professions[0],
    attributes: {},
    skills: [],
    gold: 0
  };
  $scope.saveAndShow = function() {
    var charObj, newChar;
    newChar = $scope.newCharacter;
    newChar.corrections = Races.getRaceCorrections(newChar.race);
    charObj = new Character(newChar);
    return $modalInstance.close(charObj);
  };
  $scope.goto = function(part) {
    return $scope.part = part;
  };
  reset = function() {
    return $scope.$broadcast('reset');
  };
  $scope.$watch('newCharacter.race', reset);
  $scope.$watch('newCharacter.profession', reset);
  $scope.$watch('newCharacter.male', reset);
  $scope.$watch('model.uniqueness', reset);
  $scope.$watch('model.skillPoints', function() {
    return $scope.$broadcast('resetSkillPoints');
  }, true);
  return $timeout((function() {
    return reset();
  }), 1000);
};

NewCharacterAttrsController = function($scope) {
  var computeRemaining, resetAttrs;
  resetAttrs = function() {
    var name, value, _i, _len, _ref, _ref1, _ref2;
    $scope.allocated = {};
    $scope.max = {};
    $scope.remaining = {};
    $scope.useGenderCorrections = !$scope.newCharacter.male;
    $scope.newCharacter.attributes = Races.getAttrs($scope.newCharacter.race);
    $scope.remainingMain = $scope.model.uniqueness;
    $scope.remainingSecondary = $scope.model.uniqueness * 2;
    $scope.mainAttrs = Professions.getMainAttrs($scope.newCharacter.profession);
    $scope.random = false;
    for (name in $scope.newCharacter.attributes) {
      $scope.allocated[name] = 0;
    }
    _ref = $scope.newCharacter.attributes;
    for (name in _ref) {
      value = _ref[name];
      $scope.max[name] = value + 3;
    }
    _ref1 = $scope.newCharacter.attributes;
    for (name in _ref1) {
      value = _ref1[name];
      if (!$scope.isMainAttr(name)) {
        $scope.max[name] = value + $scope.model.uniqueness;
      }
    }
    _ref2 = $scope.mainAttrs;
    for (_i = 0, _len = _ref2.length; _i < _len; _i++) {
      name = _ref2[_i];
      $scope.newCharacter.attributes[name] += 1;
    }
    return computeRemaining();
  };
  $scope.isMainAttr = function(attrName) {
    var name, _i, _len, _ref;
    _ref = $scope.mainAttrs;
    for (_i = 0, _len = _ref.length; _i < _len; _i++) {
      name = _ref[_i];
      if (name === attrName) {
        return true;
      }
    }
    return false;
  };
  $scope.getBaseAttrs = function() {
    return Attributes.getBaseAttrs();
  };
  $scope.getLongName = function(attrShort) {
    return Attributes.names[attrShort];
  };
  $scope.increase = function(attrName) {
    if ($scope.newCharacter.attributes[attrName] + 1 <= $scope.max[attrName]) {
      if ($scope.isMainAttr(attrName)) {
        if ($scope.remainingMain === 0) {
          return;
        }
        $scope.remainingMain--;
      } else {
        if ($scope.remainingSecondary === 0) {
          return;
        }
        $scope.remainingSecondary--;
      }
      $scope.allocated[attrName]++;
      $scope.newCharacter.attributes[attrName]++;
      return computeRemaining();
    }
  };
  $scope.decrease = function(attrName) {
    if ($scope.allocated[attrName] - 1 >= 0) {
      if ($scope.isMainAttr(attrName)) {
        $scope.remainingMain++;
      } else {
        $scope.remainingSecondary++;
      }
      $scope.allocated[attrName]--;
      $scope.newCharacter.attributes[attrName]--;
      return computeRemaining();
    }
  };
  computeRemaining = function() {
    var allocated, attrName, main, sec, val, _ref, _results;
    main = $scope.remainingMain;
    sec = Math.min($scope.remainingSecondary, $scope.model.uniqueness);
    _ref = $scope.allocated;
    _results = [];
    for (attrName in _ref) {
      allocated = _ref[attrName];
      if ($scope.isMainAttr(attrName)) {
        val = Math.min(main, $scope.model.uniqueness - allocated, $scope.max[attrName] - $scope.newCharacter.attributes[attrName]);
        _results.push($scope.remaining[attrName] = val);
      } else {
        _results.push($scope.remaining[attrName] = Math.min(sec, $scope.model.uniqueness - allocated));
      }
    }
    return _results;
  };
  $scope.makeRandom = function() {
    var attrName, increment, index, isRandom, values, _i, _len, _ref, _results;
    isRandom = $scope.random;
    resetAttrs();
    $scope.random = isRandom;
    values = {
      3: [0, 1, 1, 2, 2, 3],
      2: [0, 0, 1, 1, 2, 2],
      1: [0, 0, 0, 1, 1, 1]
    };
    _ref = Attributes.getBaseAttrs();
    _results = [];
    for (_i = 0, _len = _ref.length; _i < _len; _i++) {
      attrName = _ref[_i];
      index = Math.floor(Math.random() * 6);
      increment = values[$scope.model.uniqueness][index];
      _results.push($scope.newCharacter.attributes[attrName] = Math.min($scope.newCharacter.attributes[attrName] + increment, $scope.max[attrName]));
    }
    return _results;
  };
  $scope.clearRandom = function() {
    return resetAttrs();
  };
  $scope.$on('reset', function() {
    return resetAttrs();
  });
  $scope.$watch('useGenderCorrections', function(newUse, oldUse) {
    var name, value, _ref, _results;
    if ($scope.newCharacter.male) {
      return;
    }
    _ref = Races.getGenderCorrections($scope.newCharacter.race);
    _results = [];
    for (name in _ref) {
      value = _ref[name];
      $scope.newCharacter.attributes[name] += newUse ? value : -value;
      _results.push($scope.max[name] += newUse ? value : -value);
    }
    return _results;
  });
  return resetAttrs();
};

NewCharacterBackgroundController = function($scope) {
  var computeRemaining, reset;
  $scope.types = ['ancestry', 'wealth', 'skills'];
  $scope.names = {
    ancestry: 'Původ',
    wealth: 'Majetek',
    skills: 'Dovednosti'
  };
  $scope.ancestries = ['Nalezenec', 'Sirotek', 'Z neúplné rodiny', 'Z pochybné rodiny', 'Ze slušné rodiny', 'Z dobré rodiny', 'Z velmi dobré a vlivné rodiny', 'Šlechtic', 'Šlechtic z dobrého rodu'];
  $scope.wealths = [1, 3, 10, 30, 100, 300, 1000, 3000, 10000];
  reset = function() {
    $scope.total = (4 - $scope.model.uniqueness) * 5;
    $scope.remaining = {};
    $scope.allocated = {
      ancestry: 0,
      wealth: 0,
      skills: 0
    };
    $scope.professionSkillPoints = Professions.getSkillPoints($scope.newCharacter.profession);
    $scope.model.skillPoints.physical = $scope.professionSkillPoints.physical[0];
    $scope.model.skillPoints.psychic = $scope.professionSkillPoints.psychic[0];
    $scope.model.skillPoints.combined = $scope.professionSkillPoints.combined[0];
    return computeRemaining();
  };
  $scope.increase = function(type) {
    if ($scope.remaining[type] > 0) {
      $scope.allocated[type]++;
      $scope.total--;
      return computeRemaining();
    }
  };
  $scope.decrease = function(type) {
    if ($scope.allocated[type] > 0) {
      $scope.allocated[type]--;
      $scope.total++;
      return computeRemaining();
    }
  };
  computeRemaining = function() {
    var ancestry, skills, wealth;
    ancestry = $scope.allocated.ancestry;
    wealth = $scope.allocated.wealth;
    skills = $scope.allocated.skills;
    $scope.remaining.ancestry = Math.min($scope.total, 8 - ancestry);
    $scope.remaining.wealth = Math.min($scope.total, 8 - wealth, ancestry + 3 - wealth);
    $scope.remaining.skills = Math.min($scope.total, 8 - skills, ancestry + 3 - skills);
    if ($scope.remaining.wealth < 0) {
      $scope.remaining.wealth = 0;
      $scope.allocated.wealth--;
      $scope.total++;
    }
    if ($scope.remaining.skills < 0) {
      $scope.remaining.skills = 0;
      $scope.allocated.skills--;
      $scope.total++;
    }
    $scope.model.skillPoints.physical = $scope.professionSkillPoints.physical[$scope.allocated.skills];
    $scope.model.skillPoints.psychic = $scope.professionSkillPoints.psychic[$scope.allocated.skills];
    $scope.model.skillPoints.combined = $scope.professionSkillPoints.combined[$scope.allocated.skills];
    return $scope.newCharacter.gold = $scope.wealths[$scope.allocated.wealth];
  };
  return $scope.$on('reset', function() {
    return reset();
  });
};

NewCharacterSkillsController = function($scope) {
  var reset;
  $scope.skillsList = Skills.getAll();
  reset = function() {
    $scope.selectedType = 'physical';
    return $scope.remaining = angular.copy($scope.model.skillPoints);
  };
  $scope.increase = function(skillName, type) {
    var skill, _i, _len, _ref;
    if ($scope.remaining[type] === 0) {
      return;
    }
    _ref = $scope.newCharacter.skills;
    for (_i = 0, _len = _ref.length; _i < _len; _i++) {
      skill = _ref[_i];
      if (!(skill.name === skillName)) {
        continue;
      }
      if (skill.level < 3) {
        skill.level++;
        $scope.remaining[type]--;
      }
      return;
    }
    $scope.remaining[type]--;
    return $scope.newCharacter.skills.push({
      name: skillName,
      level: 1
    });
  };
  $scope.decrease = function(skillName, type) {
    var i, skill, _i, _len, _ref;
    _ref = $scope.newCharacter.skills;
    for (i = _i = 0, _len = _ref.length; _i < _len; i = ++_i) {
      skill = _ref[i];
      if (!(skill.name === skillName)) {
        continue;
      }
      if (skill.level > 0) {
        skill.level--;
        $scope.remaining[type]++;
        if (skill.level === 0) {
          $scope.newCharacter.skills.splice(i, 1);
        }
      }
      return;
    }
  };
  $scope.getLevel = function(skillName) {
    var i, skill, _i, _len, _ref;
    _ref = $scope.newCharacter.skills;
    for (i = _i = 0, _len = _ref.length; _i < _len; i = ++_i) {
      skill = _ref[i];
      if (skill.name === skillName) {
        return skill.level;
      }
    }
  };
  return $scope.$on('resetSkillPoints', reset);
};

var Constant, DamageFatigueValue, Divide, Interpreter, Minus, Parser, Plus, Skill, SkillToken, Times, UniMinus, UniPlus, Variable;

Interpreter = {
  interpret: function(expression, context) {
    var ast;
    ast = Parser.parse(expression);
    return ast.interpret(context);
  }
};

Parser = {
  skillRE: /^\[([^\]]+)]/,
  isOperator: function(c) {
    return c.match(/\+|-|\*|\//) !== null;
  },
  isSkill: function(c) {
    return c.match(Parser.skillRE) !== null;
  },
  createAST: function(queue, rounding) {
    var left, right, t;
    t = queue.pop();
    if (!isNaN(t)) {
      return new Constant(t);
    } else if (t instanceof SkillToken) {
      return new Skill(t.skillName);
    } else if (Parser.isOperator(t)) {
      right = Parser.createAST(queue, rounding);
      left = Parser.createAST(queue, rounding);
      switch (t) {
        case '+':
          return new Plus(left, right);
        case '-':
          return new Minus(left, right);
        case '*':
          return new Times(left, right);
        case '/':
          return new Divide(left, right, rounding);
      }
    } else {
      return new Variable(t);
    }
  },
  parse: function(expression) {
    var last, lastToken, m, o2, ok, outputQ, prec, rounding, stack, t, token;
    rounding = null;
    if ((m = expression.match(/:(n|d)$/)) !== null) {
      rounding = m[1];
      expression = expression.substring(0, expression.length - 2);
    }
    t = null;
    prec = {
      '*': 3,
      '/': 3,
      '+': 2,
      '-': 2,
      '-': 2,
      '(': 1,
      ')': 1
    };
    last = function(array) {
      if (array.length) {
        return array[array.length - 1];
      }
      return null;
    };
    token = function() {
      var c;
      if (!expression.length) {
        return false;
      }
      c = expression[0];
      if (Parser.isOperator(c) || c === '(' || c === ')') {
        t = c;
      } else if (Parser.isSkill(expression)) {
        m = expression.match(Parser.skillRE);
        if (m != null) {
          t = new SkillToken(m[1]);
        }
      } else {
        m = expression.match(/^[a-zA-Z0-9]+/);
        if (m != null) {
          t = m[0];
        } else {
          throw "Chyba ve vzorci";
        }
      }
      expression = expression.substring(t.length);
      return true;
    };
    stack = [];
    outputQ = [];
    while (token()) {
      if (!isNaN(t)) {
        outputQ.push(parseInt(t));
      } else if (t instanceof SkillToken) {
        outputQ.push(t);
      } else if (Parser.isOperator(t)) {
        while (stack.length) {
          o2 = last(stack);
          if (prec[t] <= prec[o2]) {
            stack.pop();
            outputQ.push(o2);
          } else {
            break;
          }
        }
        stack.push(t);
      } else if (Parser.isSkill(t)) {
        stack.push(t);
      } else if (t === '(') {
        stack.push(t);
      } else if (t === ')') {
        ok = false;
        while (stack.length) {
          lastToken = last(stack);
          if (lastToken === '(') {
            ok = true;
            break;
          } else {
            stack.pop();
            outputQ.push(lastToken);
          }
        }
        if (!ok) {
          throw "Špatně uzávorkovaný výraz";
        }
        stack.pop();
      } else {
        outputQ.push(t);
      }
    }
    while (stack.length > 0) {
      lastToken = stack.pop();
      if (lastToken === '(' || lastToken === ')') {
        throw "Špatně uzávorkovaný výraz";
      }
      outputQ.push(lastToken);
    }
    return Parser.createAST(outputQ, rounding);
  }
};

SkillToken = (function() {
  function SkillToken(skillName) {
    this.skillName = skillName;
    this.length = this.skillName.length + 2;
  }

  return SkillToken;

})();

Constant = (function() {
  function Constant(val) {
    this.val = val;
  }

  Constant.prototype.interpret = function(context) {
    return this.val;
  };

  return Constant;

})();

Variable = (function() {
  function Variable(varName) {
    this.varName = varName;
  }

  Variable.prototype.interpret = function(context) {
    return context.corrAttr(this.varName);
  };

  return Variable;

})();

Plus = (function() {
  function Plus(leftExpr, rightExpr) {
    this.leftExpr = leftExpr;
    this.rightExpr = rightExpr;
  }

  Plus.prototype.interpret = function(context) {
    return this.leftExpr.interpret(context) + this.rightExpr.interpret(context);
  };

  return Plus;

})();

UniPlus = (function() {
  function UniPlus(expr) {
    this.expr = expr;
  }

  UniPlus.prototype.interpret = function(context) {
    return 0 + this.expr.interpret(context);
  };

  return UniPlus;

})();

Minus = (function() {
  function Minus(leftExpr, rightExpr) {
    this.leftExpr = leftExpr;
    this.rightExpr = rightExpr;
  }

  Minus.prototype.interpret = function(context) {
    return this.leftExpr.interpret(context) - this.rightExpr.interpret(context);
  };

  return Minus;

})();

UniMinus = (function() {
  function UniMinus(leftExpr, rightExpr) {
    this.leftExpr = leftExpr;
    this.rightExpr = rightExpr;
  }

  UniMinus.prototype.interpret = function(context) {
    return 0 - this.rightExpr.interpret(context);
  };

  return UniMinus;

})();

Times = (function() {
  function Times(leftExpr, rightExpr) {
    this.leftExpr = leftExpr;
    this.rightExpr = rightExpr;
  }

  Times.prototype.interpret = function(context) {
    return this.leftExpr.interpret(context) * this.rightExpr.interpret(context);
  };

  return Times;

})();

Divide = (function() {
  function Divide(leftExpr, rightExpr, rounding) {
    this.leftExpr = leftExpr;
    this.rightExpr = rightExpr;
    this.rounding = rounding;
  }

  Divide.prototype.interpret = function(context) {
    var result;
    result = this.leftExpr.interpret(context) / this.rightExpr.interpret(context);
    if (this.rounding === 'd') {
      return Math.floor(result);
    } else if (this.rounding === 'n') {
      return Math.ceil(result);
    } else {
      return Math.round(result);
    }
  };

  return Divide;

})();

Skill = (function() {
  function Skill(skillName) {
    this.skillName = skillName;
  }

  Skill.prototype.interpret = function(context) {
    return context.getSkill(this.skillName).level;
  };

  return Skill;

})();

DamageFatigueValue = (function() {
  function DamageFatigueValue(value) {
    this.value = value;
  }

  DamageFatigueValue.prototype.interpret = function(context) {
    var result;
    result = this.value.interpret(this.context);
    return DamageTable.getPoints(result);
  };

  return DamageFatigueValue;

})();

var Skills;

Skills = (function() {
  function Skills() {}

  Skills.database = [
    {
      "name": "Atletika",
      "type": "physical",
      "description1": "Bonus: +1",
      "description2": "Bonus: +2",
      "description3": "Bonus: +3",
      "description": "Bonus za dovednost Atletika si přičítáš k Rch při určování Pohybové rychlosti běhu a sprintu a při skoku, můžeš si jej přičíst k Obratnosti při určování zranění při pádu, a má také vliv na maximální nosnost postavy."
    }, {
      "name": "Jezdectví",
      "type": "physical",
      "description1": "Bonus: +4 Postih k boji: -4",
      "description2": "Bonus: +6 Postih k boji: -2",
      "description3": "Bonus: +8 Postih k boji: 0",
      "description": "Bonus je pro hod na ovládání zvířete a postih je k BČ, ÚČ a OČ."
    }, {
      "name": "Kovářství",
      "type": "physical",
      "description1": "Bonus: +2",
      "description2": "Bonus: +4",
      "description3": "Bonus: +6",
      "description": "Bonus využiješ v hodu na kování: Zrč + Kovářství + 2k6*."
    }, {
      "name": "Letectví",
      "type": "physical",
      "description1": "Bonus: +2 Postih k boji: -6",
      "description2": "Bonus: +4 Postih k boji: -3",
      "description3": "Bonus: +6 Postih k boji: 0",
      "description": "Podobně jako u Jezdectví"
    }, {
      "name": "Námořnictví",
      "type": "physical",
      "description1": "Bonus k Rch: +1",
      "description2": "Bonus k Rch: +2",
      "description3": "Bonus k Rch: +3",
      "description": "Přidává bonus k Pohybové rychlosti lodi."
    }, {
      "name": "Ovládání loďky",
      "type": "physical",
      "description1": "Bonus k Rch: +1",
      "description2": "Bonus k Rch: +2",
      "description3": "Bonus k Rch: +3",
      "description": "Zvyšuje Pohybovou rychlost při plavbě na říčním plavidle."
    }, {
      "name": "Plavání",
      "type": "physical",
      "description1": "Bonus k plavání: +4 Bonus k Rch: +2",
      "description2": "Bonus k plavání: +6 Bonus k Rch: +3",
      "description3": "Bonus k plavání: +8 Bonus k Rch: +4",
      "description": "Přidává bonus k hodu na kvalitu plavání a k Pohybové rychlosti plavání."
    }, {
      "name": "Pohyb v horách",
      "type": "physical",
      "description1": "Bonus k Rch: +1",
      "description2": "Bonus k Rch: +2",
      "description3": "Bonus k Rch: +3",
      "description": "Dává bonus k Pohybové rychlosti a k jiným pohybovým činnostem (ne však při boji) při pohybu v horách."
    }, {
      "name": "Pohyb v lese",
      "type": "physical",
      "description1": "Bonus k Rch: +1",
      "description2": "Bonus k Rch: +2",
      "description3": "Bonus k Rch: +3",
      "description": "Dává bonus k Pohybové rychlosti a k jiným pohybovým činnostem (ne však při boji) při pohybu v lese."
    }, {
      "name": "Pohyb ve měste",
      "type": "physical",
      "description1": "Bonus k Rch: +1 Bonus k Int nebo Sms: +2",
      "description2": "Bonus k Rch: +2 Bonus k Int nebo Sms: +4",
      "description3": "Bonus k Rch: +3 Bonus k Int nebo Sms: +6",
      "description": "Dává bonus k Pohybové rychlosti při pohybu ve městě a městských kanálech a zároveň zlepšuje orientaci. V souvislosti s orientací si k hodu na Inteligenci nebo Smysly můžeš přičíst odpovídající bonus."
    }, {
      "name": "Rychlý pochod",
      "type": "physical",
      "description1": "Bonus k Rch: +1",
      "description2": "Bonus k Rch: +2",
      "description3": "Bonus k Rch: +3",
      "description": "Dává bonus k Pohybové rychlosti při pohybu ve volné krajině, tedy tam, kde nejsou žádné překážky (lesy, hory). Nedává bonus k boji."
    }, {
      "name": "Řízení vozu",
      "type": "physical",
      "description1": "Postih k Rch: -2",
      "description2": "Postih k Rch: -1",
      "description3": "Postih k Rch: 0",
      "description": "Snižuje postih k Pohybové rychlosti při řízení vozu."
    }, {
      "name": "Šplh a lezení",
      "type": "physical",
      "description1": "Bonus: +1",
      "description2": "Bonus: +2",
      "description3": "Bonus: +3",
      "description": "Dává bonus k hodu na šplh a o stejný bonus se zvyšuje Rychlost šplhání nebo lezení."
    }, {
      "name": "Astronomie",
      "type": "psychic",
      "description1": "Bonus k Int: +3 Bonus k orientaci: +1",
      "description2": "Bonus k Int: +6 Bonus k orientaci: +2",
      "description3": "Bonus k Int: +9 Bonus k orientaci: +3",
      "description": "Dává výhodu při navigaci a orientaci v přírodě, jsou-li ovšem nějaká nebeská tělesa v dohledu."
    }, {
      "name": "Bájesloví",
      "type": "psychic",
      "description1": "Bonus k Int: +3",
      "description2": "Bonus k Int: +6",
      "description3": "Bonus k Int: +9",
      "description": "Tato dovednost v sobě skrývá znalost pověstí a pověr, Místních, krajských i zemských. Navíc se v těchto bájích vyskytují popisy mnoha tajemných nestvůr, i to, jak je porazit. Vše platí pouze pokud hráč úspěje v hodu."
    }, {
      "name": "Botanika",
      "type": "psychic",
      "description1": "Bonus k Int: +3",
      "description2": "Bonus k Int: +6",
      "description3": "Bonus k Int: +9",
      "description": "V závislosti na stupni zvládnutí ti odhalí název, druh i čeleď, do které rostlina patří. Postava si tak například nesplete	borůvky s vraním okem."
    }, {
      "name": "Cizí jazyk",
      "type": "psychic",
      "description1": "Bonus k Int: +3",
      "description2": "Bonus k Int: +6",
      "description3": "Bonus k Int: +9",
      "description": "Při vyhodnocování znalosti cizího jazyka si hráč hází s použítím Inteligence proti obtížnosti chápaného textu."
    }, {
      "name": "Čtení, psaní",
      "type": "psychic",
      "description1": "Bonus k rychlosti čtení: 0",
      "description2": "Bonus k rychlosti čtení: +3",
      "description3": "Bonus k rychlosti čtení: +6",
      "description": "Na prvním stupni postava dokáže číst i psát. Na vyšších stupních čte rychleji a lépe chápe informace v textu."
    }, {
      "name": "Dějeprava",
      "type": "psychic",
      "description1": "Bonus k Int: +3",
      "description2": "Bonus k Int: +6",
      "description3": "Bonus k Int: +9",
      "description": "Postava využije při snaze vybavit si něco z historie světa nebo minulosti postavy."
    }, {
      "name": "Etiketa podsvětí",
      "type": "psychic",
      "description1": "Bonus k Chr: +1",
      "description2": "Bonus k Chr: +2",
      "description3": "Bonus k Chr: +3",
      "description": "Pravidla jsou podobná jako pro použití Společenské etikety. Tuhle ovšem využiješ při jednání s osobami, které porušují zákon (hodí se při vyhýbání se boji)."
    }, {
      "name": "Kreslení map",
      "type": "psychic",
      "description1": "Bonus: +2",
      "description2": "Bonus: +4",
      "description3": "Bonus: +6",
      "description": "Umožňuje postavě nejen kreslit, ale i číst a orientovat se podle map. Kvalita mapy = Zrč + Kreslení map + 2k6* Hod na použití = Int + Kreslení map + 2k6* Užitečná kvalita = Nižší z Hodu na použití a Kvality mapy Bonus k navigaci = Užitečná kvalita / 6"
    }, {
      "name": "Společenská etiketa",
      "type": "psychic",
      "description1": "Bonus k Chr: +1",
      "description2": "Bonus k Chr: +2",
      "description3": "Bonus k Chr: +3",
      "description": "Poskytuje bonus k Charismatu, avšak pouze v situacích, kdy dochází k bezprostřednímu jednání s cízími postavami."
    }, {
      "name": "Technologie",
      "type": "psychic",
      "description1": "Bonus k Int: +3 Bonus k Sms: +1",
      "description2": "Bonus k Int: +6 Bonus k Sms: +2",
      "description3": "Bonus k Int: +9 Bonus k Sms: +3",
      "description": "Tato dovednost se užívá při pochopení složitých i prostých mechanismů. Zároveň najde své uplatnění při hledání tajných mechanismů (bonus k Sms)."
    }, {
      "name": "Teologie",
      "type": "psychic",
      "description1": "Postava zná základní náboženství v kraji. Bonus k Int: +3",
      "description2": "Postava již chápe některé vztahy mezi církvemi. Bonus k Int: +6",
      "description3": "Postava již chápe většinu církevní politiky i chování, které vyžadují. Bonus k Int: +9",
      "description": "Když si postava není jista správným chováním k členům některé církve, hází si na Inteligenci s následujícím bonusem."
    }, {
      "name": "Zacházení s magickými předměty",
      "type": "psychic",
      "description1": "Bonus k Int: +2",
      "description2": "Bonus k Int: +4",
      "description3": "Bonus k Int: +6",
      "description": "Pokaždé, když se postava snaží odhalit princip nějakého magického předmětu či lektvaru, si může přičíst bonus ke svému hodu. Postava, která má dovednost na II. stupni, pozná i bez hodu ihned předmět, který již někdy prozkoumala, na III. stupni pozná už i kategorii."
    }, {
      "name": "Zěměpis",
      "type": "psychic",
      "description1": "Bonus k Int: +3",
      "description2": "Bonus k Int: +6",
      "description3": "Bonus k Int: +9",
      "description": "Postava může znát podrobnosti o kraji velkém jako Česká republika a s menší pravděpodobností v nejbližším okolí."
    }, {
      "name": "Znalost města",
      "type": "psychic",
      "description1": "Bonus k Int: +3",
      "description2": "Bonus k Int: +6",
      "description3": "Bonus k Int: +9",
      "description": "Postava bude mít například představu cenách základních komodit, bude znát význačné osobnosti místního života, vědět, na koho se obrátit za určité situace a podobně. Týká se jednoho města."
    }, {
      "name": "Znalost světa",
      "type": "psychic",
      "description1": "Bonus k Int: +2",
      "description2": "Bonus k Int: +4",
      "description3": "Bonus k Int: +6",
      "description": "Bonus si přičti v hodu na rozpoznání magie nebo mentální činnosti. Když se postava stane terčem iluze, psychicchického útoku nebo podobné praktiky může poznat, co se jí nebo někomu jinému vlastně stalo."
    }, {
      "name": "Zoologie",
      "type": "psychic",
      "description1": "Bonus k Int: +3 Bonus k ÚČ, Krytu a ZZ: +1",
      "description2": "Bonus k Int: +6 Bonus k ÚČ, Krytu a ZZ: +2",
      "description3": "Bonus k Int: +9 Bonus k ÚČ, Krytu a ZZ: +3",
      "description": "Postava může rozeznat plemena jednotlivých zvířecích druhů. Dále dostává bonus při boji se zvířaty. Zná jejich slabiny a i způsob útoku. Bonus započítej pouze pokud je zvíře svým vlastním pánem."
    }, {
      "name": "Bylinkářství",
      "type": "combined",
      "description1": "Bonus k Sms: +6 Bonus k Int: +3",
      "description2": "Bonus k Sms: +9 Bonus k Int: +6",
      "description3": "Bonus k Sms: +12 Bonus k Int: +9",
      "description": "Tato dovednost ti poskytuje jednak základní znalost bylinek, jednak schopnost je v přirodě i najít."
    }, {
      "name": "Hazardní hry",
      "type": "combined",
      "description1": "Bonus k Chr: +2",
      "description2": "Bonus k Chr: +4",
      "description3": "Bonus k Chr: +6",
      "description": "K hodu na výsledek hazardní hry si můžeš přičíst bonus nebo také odečíst, pokud chceš raději prohrát."
    }, {
      "name": "Herectví",
      "type": "combined",
      "description1": "Bonus: +3",
      "description2": "Bonus: +6",
      "description3": "Bonus: +9",
      "description": "Dovednost použij při hraní představení pro své přátele (nebo třeba vesničany). Kvalita hry = Chr + Herectví + 2k6*"
    }, {
      "name": "Hra na hudební nástroj",
      "type": "combined",
      "description1": "Bonus: +3",
      "description2": "Bonus: +6",
      "description3": "Bonus: +9",
      "description": "Platí pro jeden druh nástroje. Kvalita hry = Zrč + Hra na hudební nástroj + 2k6*"
    }, {
      "name": "Lov a rybolov",
      "type": "combined",
      "description1": "Bonus: +2",
      "description2": "Bonus: +4",
      "description3": "Bonus: +6",
      "description": "Dává bonus k hodnotě Předpokladu lovu."
    }, {
      "name": "Malování",
      "type": "combined",
      "description1": "Bonus: +3",
      "description2": "Bonus: +6",
      "description3": "Bonus: +9",
      "description": "Postava dokáže namalovat obraz od základních tvarů až po velice detailní postavy, místa nebo předměty. Kvalita obrazu = Zrč + Malování + 2k6*"
    }, {
      "name": "První pomoc",
      "type": "combined",
      "description1": "Síla léčení běžného zranění: -6 Snížení velikosti krvácení: -- Snížení velikosti jedu: --",
      "description2": "Síla léčení běžného zranění: -4 Snížení velikosti krvácení: -1 Snížení velikosti jedu: --",
      "description3": "Síla léčení běžného zranění: -2 Snížení velikosti krvácení: -2 Snížení velikosti jedu: -2",
      "description": "Umožňuje zakročit v nejčastějších situacích ohrožujících život, a případně i nějaký ten život zachránit."
    }, {
      "name": "Ruční práce",
      "type": "combined",
      "description1": "Bonus k Zrč: +2",
      "description2": "Bonus k Zrč: +4",
      "description3": "Bonus k Zrč: +6",
      "description": "Postava dokáže opravovat drobné i větší předměty."
    }, {
      "name": "Sochařství",
      "type": "combined",
      "description1": "Bonus: +3",
      "description2": "Bonus: +6",
      "description3": "Bonus: +9",
      "description": "Nejedná se jen o tesání do kamene, ale i o veškeré modelování pevných materiálů, to znamená kovů, dřeva, hlíny a jiných. Postava má cit v rukou a hrubou představu o tom, jak bude materiál na doteky reagovat. Kvalita sochy = Zrč + Sochařství + 2k6*"
    }, {
      "name": "Svádění",
      "type": "combined",
      "description1": "Bonus k Chr: +1",
      "description2": "Bonus k Chr: +2",
      "description3": "Bonus k Chr: +3",
      "description": "Bonus přičti ke všem hodům, kdy se postava bude pokoušet přesvědčit osobu opačného pohlaví, že máš zájem o blízký nebo dokonce intimní vztah s ní."
    }, {
      "name": "Šerozrakost",
      "type": "combined",
      "description1": "Bonus: +1",
      "description2": "Bonus: +2",
      "description3": "Bonus: +3",
      "description": "Jde o dovednost, která snižuje postih za Jas (Světlo a tma v kapitole Postupy při hře)."
    }, {
      "name": "Tanec",
      "type": "combined",
      "description1": "Bonus: +3",
      "description2": "Bonus: +6",
      "description3": "Bonus: +9",
      "description": "Bonus použij při hodu na kvalitu tance, který ukáže, jakým uměleckým dojmem se postavě podařilo zapůsobit na obecenstvo a na partnera. Kvalita tance = Obr + Tanec + 2k6*"
    }, {
      "name": "Uzlování",
      "type": "combined",
      "description1": "Bonus k Zrč: +1",
      "description2": "Bonus k Zrč: +2",
      "description3": "Bonus k Zrč: +3",
      "description": "Tuto dovednost využiješ nejen při zavazování, ale i rozvazování uzlů. Pokud se spoutané postavě podaří dostat se k uzlu, můžeš využít bonusu za tuto dovednost."
    }, {
      "name": "Vaření",
      "type": "combined",
      "description1": "Bonus: +2",
      "description2": "Bonus: +4",
      "description3": "Bonus: +6",
      "description": "Bonus se přičítá k hodu na kvalitu pokrmu. Tím se určuje, jak dobrý pokrm se postavě podařilo uvařit a zda hostům chutnal. Kvalita pokrmu = Zrč + Vaření + 2k6*"
    }, {
      "name": "Velké ruční práce",
      "type": "combined",
      "description1": "Bonus k Zrč: +2",
      "description2": "Bonus k Zrč: +4",
      "description3": "Bonus k Zrč: +6",
      "description": "Patří sem základy bednářství, kolářství, tesařství a jiných řemesel."
    }, {
      "name": "Vychovatelství",
      "type": "combined",
      "description1": "Bonus k Chr: +2",
      "description2": "Bonus k Chr: +4",
      "description3": "Bonus k Chr: +6",
      "description": "Tato dovednost se hodí pro různé učitele, vychovatele, ale i postavy rodičů či nejstarších sourozenců. Bonus k hodu použij při jednání s inteligentními cizími postavami, které by se v dané kultuře dali považovat za děti."
    }, {
      "name": "Vyučování",
      "type": "combined",
      "description1": "Bonus: +2",
      "description2": "Bonus: +4",
      "description3": "Bonus: +6",
      "description": "Bonus se vztahuje na hod vyučovaného (žáka). Zda-li tvůj výklad byl jasný a srozumitelný."
    }, {
      "name": "Zacházení se zvířaty",
      "type": "combined",
      "description1": "Bonus: +2",
      "description2": "Bonus: +4",
      "description3": "Bonus: +6",
      "description": "Využiješ u činností týkajících se chovu nebo zpracování zvířat (ošetřovatel, honák, pastýř, ...). Nevztahuje se na jízdu na zvířatech, ani na jejich ovládání s povozy."
    }, {
      "name": "Zpěv",
      "type": "combined",
      "description1": "Bonus: +3",
      "description2": "Bonus: +6",
      "description3": "Bonus: +9",
      "description": "Bonus použij v hodu na kvalitu zpívaného nebo recitovaného textu, při imitacích a dalších situacích, kdy je schopnost ovládat svoje hlasivky důležitá (třeba i hlasité zakřičení). Na III. stupni se můžeš pokusit napodobit i zpěv ptáka. Kvalita zpěvu = Zrč + Zpěv + 2k6*"
    }
  ];

  Skills.getAll = function() {
    var db, index, name, _ref;
    db = this.database.slice();
    _ref = Weapons.shortRangeCategories;
    for (index in _ref) {
      name = _ref[index];
      db.unshift({
        name: "Boj (" + name + ")",
        type: 'physical'
      });
    }
    db.unshift({
      name: "Boj s luky",
      type: 'combined'
    });
    db.unshift({
      name: "Boj s kušemi",
      type: 'combined'
    });
    return db;
  };

  Skills.getAllAsMap = function() {
    var map, skill, _i, _len, _ref;
    map = {};
    _ref = this.getAll();
    for (_i = 0, _len = _ref.length; _i < _len; _i++) {
      skill = _ref[_i];
      map[skill.name] = skill;
    }
    return map;
  };

  return Skills;

})();

var WeightTable;

WeightTable = (function() {
  function WeightTable() {}

  WeightTable.table = [0.1, 0.11, 0.12, 0.14, 0.16, 0.18, 0.2, 0.22, 0.25, 0.28, 0.32, 0.36, 0.4, 0.45, 0.5, 0.56, 0.63, 0.7, 0.8, 0.9, 1, 1.1, 1.2, 1.4, 1.6, 1.8, 2, 2.2, 2.5, 2.8, 3.2, 3.6, 4, 4.5, 5, 5.6, 6.3, 7, 8, 9, 10, 11, 12, 14, 16, 18, 20, 22, 25, 28, 32, 36, 40, 45, 50, 56, 63, 70, 8, 90, 100, 110, 120, 140, 160, 180, 200, 220, 250, 280, 320, 360, 400, 450, 500, 560, 630, 700, 800, 900, 1000, 1200, 1400, 1600, 1800, 2000, 2200, 2200, 2500, 2800, 3200, 2600, 4000, 4500, 5000, 5600, 6300, 7000, 8000, 9000];

  WeightTable.getWeight = function(bonus) {
    var idx;
    idx = bonus + 40;
    if (idx < 0) {
      return this.table[0];
    }
    if (idx >= this.table.length) {
      return this.table[this.table.length - 1];
    }
    return this.table[idx];
  };

  WeightTable.getBonus = function(weight) {
    var bonus, i, middle, w, w2, _i, _len, _ref;
    _ref = this.table;
    for (i = _i = 0, _len = _ref.length; _i < _len; i = ++_i) {
      w = _ref[i];
      bonus = i - 40;
      if (w === weight) {
        return bonus;
      }
      if (w > weight) {
        if (i > 0) {
          w2 = this.table[i - 1];
          middle = (w + w2) / 2;
          if (weight < middle) {
            return bonus - 1;
          } else {
            return bonus;
          }
        } else {
          return bonus;
        }
      }
    }
  };

  return WeightTable;

})();

var Weapons;

Weapons = (function() {
  function Weapons() {}

  Weapons.shortRangeCategories = {
    0: "Beze zbraně",
    1: "Hole a kopí",
    2: "Meče",
    3: "Nože a dýky",
    4: "Palice a kyje",
    5: "Řemdihy a bijáky",
    6: "Sekery",
    7: "Sudlice a trojzubce",
    8: "Šavle a tesáky"
  };

  Weapons.longRangeCategories = {
    0: "Kuše",
    1: "Luky",
    2: "Vrhací zbraně"
  };

  Weapons.longRange = [
    {
      name: "Krátký luk",
      strength: "-1",
      maxStrength: 3,
      rampancy: 2,
      damage: 1,
      type: "B",
      range: 24,
      category: 1,
      weight: 1
    }, {
      name: "Dlouhý luk",
      strength: 5,
      maxStrength: 7,
      rampancy: 3,
      damage: 4,
      type: "B",
      range: 27,
      category: 1,
      weight: "1.2"
    }, {
      name: "Krátký skládaný luk",
      strength: 1,
      maxStrength: 6,
      rampancy: 3,
      damage: 2,
      type: "B",
      range: 26,
      category: 1,
      weight: 1
    }, {
      name: "Dlouhý skládaný luk",
      strength: 5,
      maxStrength: 9,
      rampancy: 4,
      damage: 5,
      type: "B",
      range: 29,
      category: 1,
      weight: "1.5"
    }, {
      name: "Silový luk",
      strength: 7,
      maxStrength: 12,
      rampancy: 5,
      damage: 6,
      type: "B",
      range: 31,
      category: 1,
      weight: 2
    }, {
      name: "Minikuše",
      strength: "-3",
      rampancy: "-1",
      damage: 1,
      type: "B",
      range: 19,
      category: 0,
      weight: 1
    }, {
      name: "Lehká kuše",
      strength: 6,
      rampancy: 3,
      damage: 5,
      type: "B",
      range: 36,
      category: 0,
      weight: "1.5"
    }, {
      name: "Vojenská kuše",
      strength: 9,
      rampancy: 3,
      damage: 7,
      type: "B",
      range: 40,
      category: 0,
      weight: 2
    }, {
      name: "Těžká kuše",
      strength: 11,
      rampancy: 2,
      damage: 10,
      type: "B",
      range: 38,
      category: 0,
      weight: 3
    }, {
      name: "Kámen",
      strength: "-3",
      rampancy: "-1",
      damage: "-2",
      type: "D",
      range: 23,
      category: 2,
      weight: "0.2"
    }, {
      name: "Vrhací dýka",
      strength: 0,
      rampancy: 0,
      damage: 1,
      type: "B",
      range: 20,
      category: 2,
      weight: "0.2"
    }, {
      name: "Lehká vrhací sekyra",
      strength: 2,
      rampancy: 1,
      damage: 2,
      type: "S",
      range: 18,
      category: 2,
      weight: "0.7"
    }, {
      name: "Válečná vrhací sekyra",
      strength: 2,
      rampancy: 1,
      damage: 5,
      type: "S",
      range: 16,
      category: 2,
      weight: 1
    }, {
      name: "Vrhací kladivo",
      strength: 5,
      rampancy: 2,
      damage: 7,
      type: "D",
      range: 15,
      category: 2,
      weight: "0.5"
    }, {
      name: "Hvězdice",
      strength: "-1",
      rampancy: 0,
      damage: 1,
      type: "S",
      range: 20,
      category: 2,
      weight: "0.1"
    }, {
      name: "Kopí",
      strength: 3,
      rampancy: 2,
      damage: 3,
      type: "B",
      range: 23,
      category: 2,
      weight: "1.2"
    }, {
      name: "Oštěp",
      strength: 2,
      rampancy: 2,
      damage: 2,
      type: "B",
      range: 25,
      category: 2,
      weight: 1
    }, {
      name: "Prak",
      strength: "-1",
      rampancy: 1,
      damage: 1,
      type: "D",
      range: 20,
      category: 2,
      weight: "0.1"
    }
  ];

  Weapons.shortRange = [
    {
      name: "Ruka",
      length: 0,
      rampancy: 0,
      damage: "-2",
      type: "D",
      cover: 0,
      category: 0,
      twohanded: false,
      weight: 0
    }, {
      name: "Okovaná rukavice",
      length: 0,
      rampancy: 0,
      damage: 0,
      type: "D",
      cover: 0,
      category: 0,
      twohanded: false,
      weight: 0
    }, {
      name: "Noha",
      length: 0,
      rampancy: "-1",
      damage: 1,
      type: "D",
      cover: 0,
      category: 0,
      twohanded: false,
      weight: 0
    }, {
      name: "Okovaná bota",
      length: 0,
      rampancy: "-2",
      damage: 4,
      type: "D",
      cover: 0,
      category: 0,
      twohanded: false,
      weight: 0
    }, {
      name: "Nůž",
      strength: "-4",
      length: 0,
      rampancy: 0,
      damage: "-2",
      type: "B",
      cover: 1,
      category: 3,
      twohanded: false,
      weight: "0.3"
    }, {
      name: "Dýka",
      strength: "-1",
      length: 0,
      rampancy: 1,
      damage: 1,
      type: "B",
      cover: 2,
      category: 3,
      twohanded: false,
      weight: "0.2"
    }, {
      name: "Bodná dýka",
      strength: "-1",
      length: 0,
      rampancy: 2,
      damage: 0,
      type: "B",
      cover: 1,
      category: 3,
      twohanded: false,
      weight: "0.2"
    }, {
      name: "Dlouhý nůž",
      strength: "-2",
      length: 1,
      rampancy: 1,
      damage: "-1",
      type: "B",
      cover: 1,
      category: 3,
      twohanded: false,
      weight: "0.3"
    }, {
      name: "Dlouhá dýka",
      strength: 1,
      length: 1,
      rampancy: 1,
      damage: 2,
      type: "B",
      cover: 2,
      category: 3,
      twohanded: false,
      weight: "0.3"
    }, {
      name: "Lehká sekerka",
      strength: 3,
      length: 1,
      rampancy: 3,
      damage: 3,
      type: "S",
      cover: 2,
      category: 6,
      twohanded: false,
      weight: 1
    }, {
      name: "Sekera",
      strength: 6,
      length: 2,
      rampancy: 3,
      damage: 5,
      type: "S",
      cover: 2,
      category: 6,
      twohanded: false,
      weight: 2
    }, {
      name: "Válečná sekera",
      strength: 9,
      length: 3,
      rampancy: 3,
      damage: 7,
      type: "S",
      cover: 3,
      category: 6,
      twohanded: false,
      weight: "2.5"
    }, {
      name: "Obouruční sekera",
      strength: 12,
      length: 3,
      rampancy: 4,
      damage: 10,
      type: "S",
      cover: 3,
      category: 6,
      twohanded: true,
      weight: 3
    }, {
      name: "Mačeta",
      strength: 2,
      length: 1,
      rampancy: 2,
      damage: 2,
      type: "S",
      cover: 2,
      category: 8,
      twohanded: false,
      weight: 1
    }, {
      name: "Lehká šavle",
      strength: 3,
      length: 2,
      rampancy: 3,
      damage: 1,
      type: "S",
      cover: 3,
      category: 8,
      twohanded: false,
      weight: "1.2"
    }, {
      name: "Tesák",
      strength: 3,
      length: 1,
      rampancy: 2,
      damage: 3,
      type: "S",
      cover: 3,
      category: 8,
      twohanded: false,
      weight: "1.2"
    }, {
      name: "Šavle",
      strength: 6,
      length: 2,
      rampancy: 4,
      damage: 4,
      type: "S",
      cover: 3,
      category: 8,
      twohanded: false,
      weight: "1.5"
    }, {
      name: "Těžká šavle",
      strength: 9,
      length: 2,
      rampancy: 4,
      damage: 6,
      type: "S",
      cover: 4,
      category: 8,
      twohanded: false,
      weight: 2
    }, {
      name: "Krátký meč",
      strength: 2,
      length: 1,
      rampancy: 3,
      damage: 1,
      type: "S",
      cover: 4,
      category: 2,
      twohanded: false,
      weight: "1.5"
    }, {
      name: "Krátký široký meč",
      strength: 4,
      length: 1,
      rampancy: 3,
      damage: 3,
      type: "S",
      cover: 5,
      category: 2,
      twohanded: false,
      weight: "1.7"
    }, {
      name: "Široký meč",
      strength: 6,
      length: 2,
      rampancy: 4,
      damage: 4,
      type: "S",
      cover: 5,
      category: 2,
      twohanded: false,
      weight: 2
    }, {
      name: "Dlouhý meč",
      strength: 7,
      length: 3,
      rampancy: 5,
      damage: 3,
      type: "S",
      cover: 5,
      category: 2,
      twohanded: false,
      weight: "1.7"
    }, {
      name: "Jedenapůlruční meč",
      strength: 8,
      length: 2,
      rampancy: 5,
      damage: 5,
      type: "S",
      cover: 6,
      category: 2,
      twohanded: false,
      weight: 2
    }, {
      name: "Barbarský meč",
      strength: 10,
      length: 2,
      rampancy: 6,
      damage: 6,
      type: "S",
      cover: 5,
      category: 2,
      twohanded: false,
      weight: "2.5"
    }, {
      name: "Obouruční meč",
      strength: 12,
      length: 3,
      rampancy: 5,
      damage: 9,
      type: "S",
      cover: 5,
      category: 2,
      twohanded: true,
      weight: "4.5"
    }, {
      name: "Obušek",
      strength: 1,
      length: 1,
      rampancy: 1,
      damage: 2,
      type: "D",
      cover: 1,
      category: 4,
      twohanded: false,
      weight: "0.2"
    }, {
      name: "Kyj",
      strength: 3,
      length: 1,
      rampancy: 2,
      damage: 3,
      type: "D",
      cover: 2,
      category: 4,
      twohanded: false,
      weight: 1
    }, {
      name: "Okovaný kyj",
      strength: 5,
      length: 1,
      rampancy: 2,
      damage: 5,
      type: "D",
      cover: 2,
      category: 4,
      twohanded: false,
      weight: 2
    }, {
      name: "Lehký palcát",
      strength: 5,
      length: 2,
      rampancy: 3,
      damage: 4,
      type: "D",
      cover: 2,
      category: 4,
      twohanded: false,
      weight: 3
    }, {
      name: "Palcát",
      strength: 8,
      length: 2,
      rampancy: 4,
      damage: 6,
      type: "D",
      cover: 3,
      category: 4,
      twohanded: false,
      weight: 5
    }, {
      name: "Těžký kyj",
      strength: 8,
      length: 2,
      rampancy: 3,
      damage: 7,
      type: "D",
      cover: 2,
      category: 4,
      twohanded: false,
      weight: 4
    }, {
      name: "Válečné kladivo",
      strength: 10,
      length: 3,
      rampancy: 5,
      damage: 7,
      type: "D",
      cover: 3,
      category: 4,
      twohanded: false,
      weight: 3
    }, {
      name: "Obouruční kyj",
      strength: 11,
      length: 2,
      rampancy: 3,
      damage: 10,
      type: "D",
      cover: 2,
      category: 4,
      twohanded: false,
      weight: 5
    }, {
      name: "Těžký perlík",
      strength: 13,
      length: 3,
      rampancy: 4,
      damage: 11,
      type: "D",
      cover: 2,
      category: 4,
      twohanded: false,
      weight: 5
    }, {
      name: "Lehký biják",
      strength: 3,
      length: 2,
      rampancy: 2,
      damage: 3,
      type: "D",
      cover: 2,
      category: 5,
      twohanded: false,
      weight: 2
    }, {
      name: "Biják",
      strength: 7,
      length: 3,
      rampancy: 2,
      damage: 6,
      type: "D",
      cover: 3,
      category: 5,
      twohanded: false,
      weight: "2.5"
    }, {
      name: "Těžký biják",
      strength: 11,
      length: 3,
      rampancy: 3,
      damage: 9,
      type: "D",
      cover: 3,
      category: 5,
      twohanded: false,
      weight: 3
    }, {
      name: "Lehké kopí",
      strength: 1,
      length: 3,
      rampancy: 3,
      damage: 2,
      type: "B",
      cover: 3,
      category: 1,
      twohanded: true,
      weight: 1
    }, {
      name: "Zkrácená hůl",
      strength: "-4",
      length: 3,
      rampancy: 1,
      damage: "-1",
      type: "D",
      cover: 3,
      category: 1,
      twohanded: true,
      weight: "0.3"
    }, {
      name: "Lehká hůl",
      strength: "-1",
      length: 4,
      rampancy: 2,
      damage: 0,
      type: "D",
      cover: 3,
      category: 1,
      twohanded: true,
      weight: "0.5"
    }, {
      name: "Kopí",
      strength: 3,
      length: 4,
      rampancy: 3,
      damage: 4,
      type: "B",
      cover: 3,
      category: 1,
      twohanded: true,
      weight: "1.2"
    }, {
      name: "Okovaná hůl",
      strength: 1,
      length: 4,
      rampancy: 2,
      damage: 2,
      type: "D",
      cover: 3,
      category: 1,
      twohanded: true,
      weight: 1
    }, {
      name: "Dlouhé kopí",
      strength: 5,
      length: 5,
      rampancy: 3,
      damage: 6,
      type: "B",
      cover: 2,
      category: 1,
      twohanded: true,
      weight: "1.5"
    }, {
      name: "Těžká kovaná hůl",
      strength: 2,
      length: 4,
      rampancy: 2,
      damage: 4,
      type: "D",
      cover: 3,
      category: 1,
      twohanded: true,
      weight: "1.2"
    }, {
      name: "Píka",
      strength: 7,
      length: 6,
      rampancy: 3,
      damage: 8,
      type: "B",
      cover: 2,
      category: 1,
      twohanded: true,
      weight: 3
    }, {
      name: "Kovová hůl",
      strength: 5,
      length: 4,
      rampancy: 2,
      damage: 7,
      type: "D",
      cover: 3,
      category: 1,
      twohanded: true,
      weight: 3
    }, {
      name: "Vidle",
      strength: 0,
      length: 3,
      rampancy: 2,
      damage: 2,
      type: "B",
      cover: 3,
      category: 7,
      twohanded: true,
      weight: 2
    }, {
      name: "Lehká sudlice",
      strength: 2,
      length: 4,
      rampancy: 4,
      damage: 4,
      type: "S",
      cover: 3,
      category: 7,
      twohanded: true,
      weight: 3
    }, {
      name: "Lehký trojzubec",
      strength: 5,
      length: 4,
      rampancy: 3,
      damage: 6,
      type: "B",
      cover: 4,
      category: 7,
      twohanded: true,
      weight: "2.5"
    }, {
      name: "Halapartna",
      strength: 6,
      length: 4,
      rampancy: 3,
      damage: 7,
      type: "S",
      cover: 3,
      category: 7,
      twohanded: true,
      weight: 4
    }, {
      name: "Těžká sudlice",
      strength: 7,
      length: 4,
      rampancy: 4,
      damage: 9,
      type: "S",
      cover: 3,
      category: 7,
      twohanded: true,
      weight: 4
    }, {
      name: "Těžký trojzubec",
      strength: 9,
      length: 4,
      rampancy: 3,
      damage: 10,
      type: "B",
      cover: 4,
      category: 7,
      twohanded: true,
      weight: 4
    }, {
      name: "Těžká halapartna",
      strength: 10,
      length: 4,
      rampancy: 3,
      damage: 12,
      type: "S",
      cover: 3,
      category: 7,
      twohanded: true,
      weight: 6
    }, {
      name: "Cep",
      strength: 2,
      length: 4,
      rampancy: 2,
      damage: 4,
      type: "D",
      cover: 2,
      category: 5,
      twohanded: true,
      weight: 3
    }, {
      name: "Řemdih",
      strength: 6,
      length: 4,
      rampancy: 3,
      damage: 8,
      type: "D",
      cover: 2,
      category: 5,
      twohanded: true,
      weight: 2
    }, {
      name: "Okovaný cep",
      strength: 7,
      length: 4,
      rampancy: 2,
      damage: 10,
      type: "D",
      cover: 2,
      category: 5,
      twohanded: true,
      weight: 4
    }, {
      name: "Těžký řemdih",
      strength: 11,
      length: 4,
      rampancy: 3,
      damage: 13,
      type: "D",
      cover: 2,
      category: 5,
      twohanded: true,
      weight: 4
    }
  ];

  return Weapons;

})();

var CharacterStorage, Storage;

Storage = (function() {
  function Storage() {}

  Storage.prototype.put = function(key, value) {
    var json;
    json = JSON.stringify(JSON.decycle(value));
    return localStorage.setItem(key, json);
  };

  Storage.prototype.get = function(key, value) {
    var json;
    json = localStorage.getItem(key);
    return JSON.retrocycle(JSON.parse(json));
  };

  return Storage;

})();

CharacterStorage = (function() {
  function CharacterStorage(storage) {
    this.storage = storage;
  }

  CharacterStorage.prototype.putLast = function(character) {
    var obj;
    obj = character.toPlainObject();
    return this.storage.put('last', obj);
  };

  CharacterStorage.prototype.getLast = function() {
    var obj;
    obj = this.storage.get('last');
    if (obj) {
      return new Character(obj);
    } else {
      return null;
    }
  };

  return CharacterStorage;

})();

var AttrPopupController;

AttrPopupController = function($scope, $filter) {
  $scope.attrName = '';
  $scope.formula = '';
  $scope.corrections = [];
  return $scope.$on('showAttrTooltipFall', function(event, attrName) {
    $scope.attrName = attrName;
    $scope.formula = $filter('formula')($scope.character.attributes.formulas[attrName]);
    return $scope.corrections = $scope.character.corrections[attrName];
  });
};

var CombatController;

CombatController = function($scope) {
  return $scope.$on('armorChanged', function() {
    $scope.armor = SM.database.armors[$scope.character.armor];
    $scope.armor.name = $scope.character.armor;
    $scope.helmet = SM.database.helmets[$scope.character.helmet];
    return $scope.helmet.name = $scope.character.helmet;
  });
};

var ConfirmModalController;

ConfirmModalController = function($scope, $modalInstance, leadText, text, buttons) {
  $scope.leadText = leadText;
  $scope.text = text;
  $scope.buttons = buttons;
  return $scope.buttonClick = function(button) {
    button.action();
    return $modalInstance.close();
  };
};

var DamageFatigueController;

DamageFatigueController = function($scope, $attrs, growler) {
  var valueChanged;
  $scope.isRollEnabled = {
    damage: false,
    fatigue: false
  };
  $scope.isLower = {
    damage: false,
    fatigue: false
  };
  $scope.getLimit = function(type) {
    var attr, value;
    attr = type === 'damage' ? 'odl' : 'vdr';
    value = $scope.character.corrAttr(attr);
    return DamageTable.getPoints(value + 10);
  };
  $scope.getPercent = function(type, bar) {
    var limit, points, val;
    limit = $scope.getLimit(type);
    points = $scope.character[type];
    val = Math.max((bar - 1) * limit, Math.min(bar * limit, points));
    return Math.round((val - (bar - 1) * limit) * 100 / limit);
  };
  $scope.rollPenalty = function(type) {
    var actualPenalty, message, newPenalty, rolled, vol, _ref;
    if (!$scope.isRollEnabled[type]) {
      return;
    }
    actualPenalty = $scope.character.penalties[type];
    vol = $scope.character.corrAttr('vol');
    _ref = Dice.rollDamageFatiguePenalty(vol), newPenalty = _ref[0], rolled = _ref[1];
    message = "Padlo " + rolled + ", ";
    if ($scope.isLower[type] && newPenalty > actualPenalty) {
      $scope.character.penalties[type] = newPenalty;
      message += "postih se snižuje na " + newPenalty + ".";
    } else if (!$scope.isLower[type] && newPenalty < actualPenalty) {
      $scope.character.penalties[type] = newPenalty;
      message += "postih se zvyšuje na " + newPenalty + ".";
    } else {
      message += "postih zůstává na " + actualPenalty + ".";
    }
    growler.info({
      title: 'Hod na postih',
      message: message
    });
    return $scope.isRollEnabled[type] = false;
  };
  valueChanged = function(type, newVal, oldVal) {
    var cause, message;
    if (type === 'damage') {
      message = 'Postih za zranění byl zrušen, zranění jsou lehká.';
      cause = 'Postava měla rozsáhlá zranění a zemřela!';
    } else {
      message = 'Postih za únavu byl zrušen, únava je lehká.';
      cause = 'Postava dosáhla maximální únavy a zemřela!';
    }
    if (newVal === $scope.getLimit(type) * 3) {
      growler.error({
        title: 'Postava zemřela!',
        message: cause
      });
    }
    if (newVal < $scope.getLimit('damage')) {
      if ($scope.character.penalties[type] !== 0) {
        growler.info({
          title: 'Zrušen postih',
          message: message
        });
      }
      $scope.character.penalties[type] = 0;
      return $scope.isRollEnabled[type] = false;
    } else {
      $scope.isLower[type] = newVal < oldVal;
      return $scope.isRollEnabled[type] = true;
    }
  };
  return $scope.$watch("character." + $attrs.type, function(newVal, oldVal) {
    return valueChanged($attrs.type, newVal, oldVal);
  });
};

var EquipmentController;

EquipmentController = function($scope, $modal, confirm, growler) {
  var getLoadLabel, getLoadPenalty;
  $scope.addNewItem = function() {
    var confirmPrice, dialog;
    dialog = $modal.open({
      templateUrl: 'partials/itemListModal.html',
      controller: 'ItemListController',
      resolve: {
        confirmCallback: function() {
          return function(result, success, reject) {
            if (result.pay && $scope.character.gold < result.totalPrice) {
              return confirmPrice(result, success, reject);
            } else {
              return success();
            }
          };
        }
      }
    });
    confirmPrice = function(result, success, reject) {
      return confirm.show('Nedostatek peněz', 'Postava nemá dostatek peněz k zaplacení předmětu. Chcete zaplatit', [
        {
          caption: 'Zaplatit',
          action: success
        }, {
          caption: 'Nezaplatit',
          action: function() {
            result.pay = false;
            return success();
          }
        }, {
          caption: 'Storno',
          action: reject
        }
      ]);
    };
    return dialog.result.then(function(result) {
      if (result.pay) {
        if ($scope.character.gold < result.totalPrice) {
          $scope.character.gold = 0;
        } else {
          $scope.character.gold -= result.totalPrice;
        }
      }
      console.log(result);
      return $scope.character.items.push(result.item);
    });
  };
  $scope.removeItem = function(itemIdx) {
    return confirm.show('Odstranit předmět?', "Chcete odstranit záznam s předmětem '" + $scope.character.items[itemIdx].name + "'?", [
      {
        caption: 'Odstranit',
        className: 'btn-danger',
        action: function() {
          return $scope.character.items.splice(itemIdx, 1);
        }
      }, {
        caption: 'Storno',
        action: function() {}
      }
    ]);
  };
  $scope.increase = function(itemIdx) {
    return $scope.character.items[itemIdx].count++;
  };
  $scope.decrease = function(itemIdx) {
    var item;
    item = $scope.character.items[itemIdx];
    if (item.count > 1) {
      return item.count--;
    } else {
      return $scope.removeItem(itemIdx);
    }
  };
  $scope.getLoad = function() {
    var item, load, _i, _len, _ref;
    load = 0;
    _ref = $scope.character.items;
    for (_i = 0, _len = _ref.length; _i < _len; _i++) {
      item = _ref[_i];
      load += item.weight * item.count;
    }
    return load;
  };
  $scope.getMaxLoad = function() {
    var max;
    max = $scope.character.corrAttr('maxNaklad');
    return WeightTable.getWeight(max);
  };
  $scope.$watch('character.items', (function() {
    var bonus, load, missingStrength;
    load = $scope.getLoad();
    bonus = WeightTable.getBonus(load);
    missingStrength = bonus - $scope.character.corrAttr('sil');
    $scope.loadLabel = getLoadLabel(missingStrength);
    $scope.loadPenalty = getLoadPenalty(missingStrength);
    if (load > $scope.getMaxLoad()) {
      return growler.error({
        title: 'Příliš velký náklad!',
        message: 'Postava má příliš velký náklad a nemůže se skoro hýbat.'
      });
    }
  }), true);
  getLoadLabel = function(missingStrength) {
    var athletLevel, label, labels, offset;
    athletLevel = $scope.character.getSkill('Atletika').level;
    labels = {
      0: 'žádné',
      6: 'mírné',
      12: 'střední',
      17: 'velké',
      21: 'extrémní'
    };
    for (offset in labels) {
      label = labels[offset];
      if (missingStrength <= parseInt(offset) + athletLevel) {
        return label;
      }
    }
  };
  return getLoadPenalty = function(missingStrength) {
    var penalty;
    penalty = Math.round(missingStrength / 2);
    if (penalty >= 0) {
      return -penalty;
    } else {
      return 0;
    }
  };
};

var ItemListController;

ItemListController = function($scope, $modalInstance, confirmCallback) {
  var itemName;
  $scope.items = (function() {
    var _results;
    _results = [];
    for (itemName in SM.database.items) {
      _results.push(SM.database.items[itemName]);
    }
    return _results;
  })();
  $scope.selectedItem = null;
  $scope.model = {
    price: 0,
    count: 1,
    payForItem: false,
    userItemName: ''
  };
  $scope.select = function(item) {
    $scope.model.price = item.price;
    return $scope.selectedItem = item;
  };
  $scope.ok = function() {
    var result;
    result = {
      item: {
        name: $scope.model.userItemName || $scope.selectedItem.name,
        weight: $scope.selectedItem.weight,
        price: $scope.model.price,
        count: $scope.model.count
      },
      pay: $scope.model.payForItem,
      totalPrice: $scope.model.count * $scope.model.price
    };
    return confirmCallback(result, function() {
      return $modalInstance.close(result);
    }, function() {});
  };
  return $scope.close = function() {
    return $modalInstance.dismiss('close');
  };
};

var LevelUpController,
  __indexOf = [].indexOf || function(item) { for (var i = 0, l = this.length; i < l; i++) { if (i in this && this[i] === item) return i; } return -1; };

LevelUpController = function($scope, $modalInstance, character) {
  var getMains, getSecondaries, getSkillOptions, main, mainAttrs, selectedMain, switchWith, _i, _len, _ref, _ref1;
  mainAttrs = Professions.getMainAttrs(character.profession);
  getMains = function() {
    var attr, mains, _i, _len;
    mains = [];
    for (_i = 0, _len = mainAttrs.length; _i < _len; _i++) {
      attr = mainAttrs[_i];
      mains.push({
        attr: attr,
        label: Attributes.names[attr]
      });
    }
    return mains;
  };
  getSecondaries = function() {
    var attr, secondaries, _i, _len, _ref;
    secondaries = [];
    _ref = Attributes.getBaseAttrs();
    for (_i = 0, _len = _ref.length; _i < _len; _i++) {
      attr = _ref[_i];
      if (__indexOf.call(mainAttrs, attr) < 0) {
        secondaries.push({
          attr: attr,
          label: Attributes.names[attr],
          used: __indexOf.call(character.leveledUpAttributes, attr) >= 0
        });
      }
    }
    return secondaries;
  };
  getSkillOptions = function() {
    var i, points, skill, skillMap, skillName, skillOpt, skillOptions, _i, _j, _len, _ref, _ref1;
    skillMap = Skills.getAllAsMap();
    _ref = character.skills;
    for (_i = 0, _len = _ref.length; _i < _len; _i++) {
      skill = _ref[_i];
      skillOpt = skillMap[skill.name];
      skillOpt.disabled = skill.level === 3;
      points = '';
      for (i = _j = 1, _ref1 = skill.level; 1 <= _ref1 ? _j <= _ref1 : _j >= _ref1; i = 1 <= _ref1 ? ++_j : --_j) {
        points += '\u2022 ';
      }
      skillOpt.label = points + skill.name;
    }
    skillOptions = [];
    for (skillName in skillMap) {
      skillOpt = skillMap[skillName];
      if (skillOpt.label == null) {
        skillOpt.label = skillOpt.name;
      }
      skillOptions.push(skillOpt);
    }
    return skillOptions;
  };
  $scope.mains = getMains();
  $scope.secondaries = getSecondaries();
  $scope.skillOptions = [getSkillOptions(), getSkillOptions()];
  switchWith = function(arr) {
    return function(newSkill, oldSkill) {
      var skill, _i, _len, _ref, _results;
      _ref = $scope.skillOptions[arr];
      _results = [];
      for (_i = 0, _len = _ref.length; _i < _len; _i++) {
        skill = _ref[_i];
        if (skill.name === newSkill) {
          skill.disabled = true;
        }
        if (skill.name === oldSkill) {
          _results.push(skill.disabled = false);
        } else {
          _results.push(void 0);
        }
      }
      return _results;
    };
  };
  $scope.$watch('levelUp.skills[0]', switchWith(1), true);
  $scope.$watch('levelUp.skills[1]', switchWith(0), true);
  if (character.leveledUpAttributes.length > 0) {
    _ref = $scope.mains;
    for (_i = 0, _len = _ref.length; _i < _len; _i++) {
      main = _ref[_i];
      if (_ref1 = main.attr, __indexOf.call(character.leveledUpAttributes, _ref1) < 0) {
        selectedMain = main.attr;
      }
    }
  }
  $scope.levelUp = {
    main: selectedMain != null ? selectedMain : null,
    secondary: null,
    skills: []
  };
  $scope.isOk = function() {
    return ($scope.levelUp.main != null) && ($scope.levelUp.secondary != null);
  };
  $scope.ok = function() {
    return $modalInstance.close({
      attributes: [$scope.levelUp.main, $scope.levelUp.secondary],
      skills: $scope.levelUp.skills
    });
  };
  return $scope.cancel = function() {
    return $modalInstance.dismiss('cancel');
  };
};

var MainController;

MainController = function($scope, $rootScope, Character, growler, $timeout, $modal, characterStorage, $state) {
  var heading, notifyOnline, pages, state;
  pages = {
    'main.attributes': 'Vlastnosti',
    'main.combat': 'Boj',
    'main.travel': 'Na cesty',
    'main.equipment': 'Výbava',
    'main.skills': 'Dovednosti'
  };
  $scope.tabs = [];
  for (state in pages) {
    heading = pages[state];
    $scope.tabs.push({
      state: state,
      heading: heading,
      active: false
    });
  }
  $scope.go = function(state) {
    return $state.go(state);
  };
  $scope.isTabActive = function(state) {
    return $state.is(state);
  };
  $scope.$on('$stateChangeSuccess', function() {
    var tab, _i, _len, _ref, _results;
    _ref = $scope.tabs;
    _results = [];
    for (_i = 0, _len = _ref.length; _i < _len; _i++) {
      tab = _ref[_i];
      _results.push(tab.active = $state.is(tab.state));
    }
    return _results;
  });
  $scope.character = Character.currentCharacter;
  $scope.attributes = Attributes;
  $scope.$on('showAttrTooltipRise', function(event, attrName) {
    return $scope.$broadcast('showAttrTooltipFall', attrName);
  });
  $scope.alert = function(msg) {
    return alert(msg);
  };
  $scope.log = function(msg) {
    return console.log(msg);
  };
  $timeout((function() {
    return $scope.$broadcast('armorChanged');
  }), 50);
  notifyOnline = false;
  $rootScope.$on('app.online', function() {
    if (!notifyOnline) {
      return;
    }
    return growler.success({
      title: 'Připojeno!',
      message: 'Připojení k internetu bylo obnoveno'
    });
  });
  $rootScope.$on('app.offline', function() {
    notifyOnline["true"];
    return growler.error({
      title: 'Připojení selhalo!',
      message: 'Používá se lokální úložiště'
    });
  });
  $scope.createCharacter = function() {
    var dialog;
    dialog = $modal.open({
      templateUrl: 'partials/createCharacterForms.html',
      controller: 'NewCharacterController'
    });
    return dialog.result.then(function(newChar) {
      characterStorage.putLast(newChar);
      $scope.character = newChar;
      return growler.success({
        title: 'Postava vytvořena',
        message: "Postava " + newChar.name + " vytvořena a uložena"
      });
    });
  };
  return $scope.openLevelUpDialog = function() {
    var dialog;
    dialog = $modal.open({
      templateUrl: 'partials/levelUpModal.html',
      controller: 'LevelUpController',
      resolve: {
        character: function() {
          return $scope.character;
        }
      }
    });
    return dialog.result.then(function(result) {
      return $scope.character.levelUp(result);
    });
  };
};

var SkillController;

SkillController = function($scope) {
  var updateSkillModel;
  $scope.$watch('character.skills', (function() {
    return updateSkillModel();
  }), true);
  $scope.skills = {};
  updateSkillModel = function() {
    var s, skill, skillMap, _i, _len, _ref, _results;
    skillMap = Skills.getAllAsMap();
    $scope.skills = {
      physical: [],
      psychic: [],
      combined: []
    };
    _ref = $scope.character.skills;
    _results = [];
    for (_i = 0, _len = _ref.length; _i < _len; _i++) {
      skill = _ref[_i];
      s = skillMap[skill.name];
      s.level = skill.level;
      _results.push($scope.skills[s.type].push(s));
    }
    return _results;
  };
  return updateSkillModel();
};

var CharacterService;

CharacterService = function($scope, currentCharacter) {
  return {
    currentCharacter: currentCharacter || null,
    openCharacters: [],
    open: function(character) {
      this.currentCharacter = character;
      return $scope.$broadcast('characters.updated');
    },
    close: function(character) {
      this.openCharacters = this.openCharacters.filter(function(c) {
        return c !== character;
      });
      return $scope.$broadcast('characters.updated');
    }
  };
};

var GroupManager;

GroupManager = function($scope, characterStorage) {
  var char, groups, name, names, _i, _len;
  groups = {};
  names = storage.getSavedCharacterNames();
  for (_i = 0, _len = names.length; _i < _len; _i++) {
    name = names[_i];
    char = storage.getCharacter(name);
    if (!groups[char.group]) {
      groups[char.group] = [];
    }
    groups[char.group].push(char);
  }
  for (name in groups) {
    groups[name] = new Group(groups[name]);
  }
  return {
    groups: groups
  };
};

var Attributes;

Attributes = (function() {
  Attributes.names = {
    sil: 'Síla',
    obr: 'Obratnost',
    zrc: 'Zručnost',
    vol: 'Vůle',
    int: 'Inteligence',
    chr: 'Charisma',
    vel: 'Velikost',
    hmt: 'Hmotnost',
    vys: 'Výška',
    odl: 'Odolnost',
    vdr: 'Výdrž',
    rch: 'Rychlost',
    sms: 'Smysly',
    krs: 'Krása',
    nbz: 'Nebezpečnost',
    dst: 'Důstojnost',
    boj: 'Boj',
    utok: 'Útok',
    strelba: 'Střelba',
    obrana: 'Obrana',
    mezZraneni: 'Mez zranění',
    mezUnavy: 'Mez únavy',
    chuze: 'Chůze',
    spech: 'Spěch',
    beh: 'Běh',
    sprint: 'Sprint'
  };

  Attributes.prototype.formulas = {
    odl: 'sil',
    vdr: '(sil+vol)/2',
    rch: '(sil+obr)/2',
    sms: 'zrc',
    krs: '(obr+zrc)/2+chr/2',
    nbz: '(sil+vol)/2+chr/2',
    dst: '(int+vol)/2+chr/2',
    utok: 'obr/2:d',
    strelba: 'zrc/2:d',
    obrana: 'obr/2:n',
    mezZraneni: 'Odl+10',
    mezUnavy: 'Vdr+10',
    maxNaklad: 'Sil+21+[Atletika]',
    chuze: 'rch/2+23',
    spech: 'rch/2+26',
    beh: 'rch/2+32',
    sprint: 'rch/2+36'
  };

  function Attributes(character, baseAttributes) {
    var formula, name, _ref;
    this.character = character;
    this.baseAttributes = baseAttributes;
    this.formulas['boj'] = Professions.combatFormulas[this.character.profession];
    this.otherAttributes = {};
    _ref = this.formulas;
    for (name in _ref) {
      formula = _ref[name];
      this.otherAttributes[name] = Parser.parse(formula);
    }
    this.otherAttributes.mezZraneni = new DamageFatigueValue(this.otherAttributes.mezZraneni);
    this.otherAttributes.mezUnavy = new DamageFatigueValue(this.otherAttributes.mezUnavy);
  }

  Attributes.prototype.getRaw = function(name) {
    var _ref;
    return (_ref = this.baseAttributes[name]) != null ? _ref : 0;
  };

  Attributes.prototype.setRaw = function(name, value) {
    if (this.baseAttributes[name] != null) {
      return this.baseAttributes[name] = value;
    }
  };

  Attributes.prototype.corrAttr = function(name) {
    var attr;
    attr = 0;
    if (this.baseAttributes[name] != null) {
      attr = this.baseAttributes[name];
    } else if (this.otherAttributes[name] != null) {
      attr = this.otherAttributes[name].interpret(this.character);
    }
    attr += this.character._getCorrectionSum(name);
    return attr;
  };

  Attributes.prototype.attrs = function() {
    var name, obj;
    obj = {};
    for (name in this.baseAttributes) {
      obj[name] = this.corrAttr(name);
    }
    for (name in this.otherAttributes) {
      obj[name] = this.corrAttr(name);
    }
    return obj;
  };

  Attributes.getBaseAttrs = function(attrName) {
    return ['sil', 'obr', 'zrc', 'vol', 'int', 'chr'];
  };

  Attributes.prototype.toPlainObject = function() {
    return this.baseAttributes;
  };

  return Attributes;

})();

var Character,
  __indexOf = [].indexOf || function(item) { for (var i = 0, l = this.length; i < l; i++) { if (i in this && this[i] === item) return i; } return -1; };

Character = (function() {
  function Character(character) {
    var _ref, _ref1, _ref10, _ref11, _ref12, _ref2, _ref3, _ref4, _ref5, _ref6, _ref7, _ref8, _ref9;
    this.name = character.name;
    this.profession = character.profession;
    this.race = character.race;
    this.male = character.male;
    this.background = (_ref = character.background) != null ? _ref : "";
    this.skills = (_ref1 = character.skills) != null ? _ref1 : [];
    this.level = (_ref2 = character.level) != null ? _ref2 : 1;
    this.experience = (_ref3 = character.experience) != null ? _ref3 : 0;
    this.items = (_ref4 = character.items) != null ? _ref4 : [];
    this.gold = (_ref5 = character.gold) != null ? _ref5 : 0;
    this.attributes = new Attributes(this, character.attributes);
    this.corrections = (_ref6 = character.corrections) != null ? _ref6 : [];
    this.leveledUpAttributes = (_ref7 = character.leveledUpAttributes) != null ? _ref7 : {};
    this.damage = (_ref8 = character.damage) != null ? _ref8 : 0;
    this.fatigue = (_ref9 = character.fatigue) != null ? _ref9 : 0;
    this.penalties = (_ref10 = character.penalties) != null ? _ref10 : {
      damage: 0,
      fatigue: 0
    };
    this.armor = (_ref11 = character.armor) != null ? _ref11 : 'Beze zbroje';
    this.helmet = (_ref12 = character.helmet) != null ? _ref12 : 'Bez pokrývky hlavy';
  }

  Character.prototype.attr = function(attrName, value) {
    if (arguments.length === 2) {
      return this.attributes.setRaw(attrName, value);
    } else {
      return this.attributes.getRaw(attrName);
    }
  };

  Character.prototype.corrAttr = function(attrName) {
    return this.attributes.corrAttr(attrName);
  };

  Character.prototype._getCorrectionSum = function(attrName) {
    var corr, sum, _i, _len, _ref, _ref1;
    sum = 0;
    _ref1 = (_ref = this.corrections[attrName]) != null ? _ref : [];
    for (_i = 0, _len = _ref1.length; _i < _len; _i++) {
      corr = _ref1[_i];
      sum += corr.value;
    }
    return sum;
  };

  Character.prototype.attrs = function() {
    return this.attributes.attrs();
  };

  Character.prototype.getSkill = function(skillName) {
    var skill, _i, _len, _ref;
    _ref = this.skills;
    for (_i = 0, _len = _ref.length; _i < _len; _i++) {
      skill = _ref[_i];
      if (skill.name === skillName) {
        return skill;
      }
    }
    return {
      name: skillName,
      level: 0
    };
  };

  Character.prototype.getExperienceNeeded = function() {
    return DamageTable.getPoints(this.level + 15);
  };

  Character.prototype.levelUp = function(props) {
    var attr, leveledSkills, skill, skillName, _i, _j, _k, _len, _len1, _len2, _ref, _ref1, _ref2, _ref3;
    this.leveledUpAttributes = props.attributes;
    _ref = props.attributes;
    for (_i = 0, _len = _ref.length; _i < _len; _i++) {
      attr = _ref[_i];
      this.attr(attr, this.attr(attr) + 1);
    }
    leveledSkills = [];
    _ref1 = this.skills;
    for (_j = 0, _len1 = _ref1.length; _j < _len1; _j++) {
      skill = _ref1[_j];
      if (!(_ref2 = skill.name, __indexOf.call(props.skills, _ref2) >= 0)) {
        continue;
      }
      skill.level += 1;
      leveledSkills.push(skill.name);
    }
    _ref3 = props.skills;
    for (_k = 0, _len2 = _ref3.length; _k < _len2; _k++) {
      skillName = _ref3[_k];
      if (__indexOf.call(leveledSkills, skillName) < 0) {
        this.skills.push({
          name: skillName,
          level: 1
        });
      }
    }
    this.experience = this.experience - this.getExperienceNeeded();
    return this.level += 1;
  };

  Character.prototype.toPlainObject = function() {
    var name, obj, value;
    obj = {};
    for (name in this) {
      value = this[name];
      if (typeof value !== 'function') {
        obj[name] = value;
      }
    }
    obj.attributes = this.attributes.toPlainObject();
    obj.corrections = this.corrections;
    return obj;
  };

  return Character;

})();

var Dice;

Dice = (function() {
  function Dice() {}

  Dice._roll6 = function() {
    return Math.floor((Math.random() * 6) + 1);
  };

  Dice.roll2k6 = function() {
    var x;
    x = this._roll6() + this._roll6();
    switch (x) {
      case 2:
        while (this._roll6() <= 3) {
          x--;
        }
        break;
      case 12:
        while (this._roll6() >= 4) {
          x++;
        }
    }
    return x;
  };

  Dice.rollDamageFatiguePenalty = function(vol) {
    var newPenalty, rolled;
    rolled = vol + Dice.roll2k6();
    if (rolled < 5) {
      newPenalty = -3;
    }
    if ((5 <= rolled && rolled < 10)) {
      newPenalty = -2;
    }
    if ((10 <= rolled && rolled < 15)) {
      newPenalty = -1;
    }
    if (rolled >= 15) {
      newPenalty = 0;
    }
    return [newPenalty, rolled];
  };

  return Dice;

})();

var Group;

Group = (function() {
  function Group(characters) {
    this.characters = characters;
  }

  Group.prototype.getCharacters = function() {
    return this.characters;
  };

  return Group;

})();

var Professions;

Professions = (function() {
  function Professions() {}

  Professions.names = ['Bojovník', 'Zloděj', 'Hraničář', 'Čaroděj', 'Theurg', 'Kněz'];

  Professions._mainAttrs = {
    'Bojovník': ['sil', 'obr'],
    'Zloděj': ['obr', 'zrc'],
    'Hraničář': ['zrc', 'sil'],
    'Čaroděj': ['vol', 'int'],
    'Theurg': ['int', 'chr'],
    'Kněz': ['chr', 'vol']
  };

  Professions._skillPoints = {
    'Bojovník': {
      physical: [2, 3, 4, 4, 5, 6, 8, 10, 12],
      psychic: [0, 0, 0, 1, 1, 2, 2, 3, 4],
      combined: [1, 1, 1, 2, 3, 3, 4, 5, 6]
    },
    'Zloděj': {
      physical: [1, 2, 2, 3, 4, 5, 6, 8, 9],
      psychic: [1, 1, 1, 2, 2, 2, 3, 4, 6],
      combined: [1, 1, 2, 2, 3, 4, 5, 6, 7]
    },
    'Hraničář': {
      physical: [2, 2, 3, 3, 4, 5, 6, 8, 10],
      psychic: [0, 0, 0, 1, 1, 1, 2, 3, 4],
      combined: [1, 2, 2, 3, 4, 5, 6, 7, 8]
    },
    'Čaroděj': {
      physical: [0, 1, 1, 2, 2, 3, 4, 5, 6],
      psychic: [3, 3, 4, 4, 5, 6, 7, 9, 11],
      combined: [0, 0, 0, 1, 2, 2, 3, 4, 4]
    },
    'Theurg': {
      physical: [0, 0, 0, 1, 1, 2, 2, 3, 4],
      psychic: [2, 3, 4, 4, 5, 6, 8, 10, 12],
      combined: [1, 1, 1, 2, 3, 3, 4, 5, 6]
    },
    'Kněz': {
      physical: [0, 0, 1, 1, 2, 2, 3, 4, 5],
      psychic: [1, 2, 2, 3, 3, 4, 5, 7, 9],
      combined: [2, 2, 2, 3, 4, 5, 6, 7, 8]
    }
  };

  Professions.combatFormulas = {
    'Bojovník': 'obr',
    'Zloděj': '(zrc+obr)/2',
    'Hraničář': '(zrc+obr)/2',
    'Čaroděj': '(int+obr)/2',
    'Theurg': '(int+obr)/2',
    'Kněz': '(chr+obr)/2'
  };

  Professions.getMainAttrs = function(profession) {
    return this._mainAttrs[profession];
  };

  Professions.getSkillPoints = function(profession) {
    return angular.copy(this._skillPoints[profession]);
  };

  return Professions;

})();

var Races;

Races = (function() {
  function Races() {}

  Races.names = ['Člověk', 'Horal', 'Elf', 'Zelený elf', 'Temný elf', 'Trpaslík', 'Horský trpaslík', 'Hobit', 'Kroll', 'Divoký kroll', 'Skřet', 'Skurut', 'Goblin'];

  Races._attrs = {
    'Člověk': {
      vys: 180,
      hmt: 6,
      vel: 0,
      sil: 0,
      obr: 0,
      zrc: 0,
      vol: 0,
      int: 0,
      chr: 0
    },
    'Horal': {
      vys: 180,
      hmt: 6,
      vel: 0,
      sil: 1,
      obr: 0,
      zrc: 0,
      vol: 1,
      int: -1,
      chr: -1
    },
    'Elf': {
      vys: 160,
      hmt: 2,
      vel: -1,
      sil: -1,
      obr: 1,
      zrc: 1,
      vol: -2,
      int: 1,
      chr: 1
    },
    'Zelený elf': {
      vys: 160,
      hmt: 2,
      vel: -1,
      sil: -1,
      obr: 1,
      zrc: 0,
      vol: -1,
      int: 1,
      chr: 1
    },
    'Temný elf': {
      vys: 160,
      hmt: 2,
      vel: -1,
      sil: 0,
      obr: 0,
      zrc: 0,
      vol: 0,
      int: 1,
      chr: 0
    },
    'Trpaslík': {
      vys: 140,
      hmt: 5,
      vel: 0,
      sil: 1,
      obr: -1,
      zrc: 0,
      vol: 2,
      int: -1,
      chr: -2
    },
    'Horský trpaslík': {
      vys: 140,
      hmt: 5,
      vel: 0,
      sil: 2,
      obr: -1,
      zrc: 0,
      vol: 2,
      int: -2,
      chr: -2
    },
    'Hobit': {
      vys: 110,
      hmt: 0,
      vel: -2,
      sil: -3,
      obr: 1,
      zrc: 1,
      vol: 0,
      int: -1,
      chr: 2
    },
    'Kroll': {
      vys: 220,
      hmt: 12,
      vel: 3,
      sil: 3,
      obr: -2,
      zrc: -1,
      vol: 1,
      int: -3,
      chr: -1
    },
    'Divoký kroll': {
      vys: 220,
      hmt: 12,
      vel: 3,
      sil: 3,
      obr: -1,
      zrc: -2,
      vol: 2,
      int: -3,
      chr: -2
    },
    'Skřet': {
      vys: 160,
      hmt: 4,
      vel: -1,
      sil: 0,
      obr: 2,
      zrc: 0,
      vol: -1,
      int: 0,
      chr: -2
    },
    'Skurut': {
      vys: 180,
      hmt: 7,
      vel: 1,
      sil: 1,
      obr: 1,
      zrc: -1,
      vol: 0,
      int: 0,
      chr: -2
    },
    'Goblin': {
      vys: 150,
      hmt: 2,
      vel: -1,
      sil: -1,
      obr: 2,
      zrc: 1,
      vol: -2,
      int: 0,
      chr: -1
    }
  };

  Races._genderCorrections = {
    'Člověk': {
      sil: -1,
      obr: 0,
      zrc: 0,
      vol: 0,
      int: 0,
      chr: 1
    },
    'Horal': {
      sil: -1,
      obr: 0,
      zrc: 0,
      vol: 0,
      int: 0,
      chr: 1
    },
    'Elf': {
      sil: -1,
      obr: 0,
      zrc: 1,
      vol: 0,
      int: -1,
      chr: 1
    },
    'Zelený elf': {
      sil: -1,
      obr: 0,
      zrc: 1,
      vol: 0,
      int: -1,
      chr: 1
    },
    'Temný elf': {
      sil: -1,
      obr: 0,
      zrc: 1,
      vol: 0,
      int: -1,
      chr: 1
    },
    'Trpaslík': {
      sil: 0,
      obr: 0,
      zrc: -1,
      vol: 0,
      int: 1,
      chr: 0
    },
    'Horský trpaslík': {
      sil: 0,
      obr: 0,
      zrc: -1,
      vol: 0,
      int: 1,
      chr: 0
    },
    'Hobit': {
      sil: -1,
      obr: 1,
      zrc: -1,
      vol: 0,
      int: 0,
      chr: 1
    },
    'Kroll': {
      sil: -1,
      obr: 1,
      zrc: 0,
      vol: -1,
      int: 0,
      chr: 1
    },
    'Divoký kroll': {
      sil: -1,
      obr: 1,
      zrc: 0,
      vol: -1,
      int: 0,
      chr: 1
    },
    'Skřet': {
      sil: -1,
      obr: 1,
      zrc: 0,
      vol: -1,
      int: 0,
      chr: 1
    },
    'Skurut': {
      sil: -1,
      obr: 1,
      zrc: 0,
      vol: -1,
      int: 0,
      chr: 1
    },
    'Goblin': {
      sil: -1,
      obr: 1,
      zrc: 0,
      vol: -1,
      int: 0,
      chr: 1
    }
  };

  Races._raceCorrections = {
    'Elf': {
      odl: -1
    },
    'Zelený elf': {
      odl: -1
    },
    'Temný elf': {
      odl: -1
    },
    'Trpaslík': {
      odl: 1,
      sms: -1
    },
    'Horský trpaslík': {
      odl: 1,
      sms: -1
    },
    'Hobit': {
      boj: -1,
      rch: -1
    },
    'Kroll': {
      boj: 1,
      rch: -1
    },
    'Divoký kroll': {
      boj: 1,
      rch: -1
    },
    'Skřet': {
      sms: 1
    },
    'Skurut': {
      sms: 1
    },
    'Goblin': {
      sms: 1
    }
  };

  Races.getAttrs = function(race) {
    return angular.copy(this._attrs[race]);
  };

  Races.getGenderCorrections = function(race) {
    return angular.copy(this._genderCorrections[race]);
  };

  Races.getRaceCorrections = function(race) {
    var attrName, corrections, value, _ref;
    corrections = {};
    _ref = this._raceCorrections[race];
    for (attrName in _ref) {
      value = _ref[attrName];
      corrections[attrName] = [
        {
          value: value,
          cause: 'za rasu'
        }
      ];
    }
    return corrections;
  };

  return Races;

})();
