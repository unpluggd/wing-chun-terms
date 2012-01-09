(function() {
  var APP, getCards, shuffle, terms,
    __hasProp = Object.prototype.hasOwnProperty,
    __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor; child.__super__ = parent.prototype; return child; };

  terms = [['Kuen', 'Fist'], ['Yat Chi Kuen', 'Single Thrusting Punch'], ['Lin Wan Kuen', 'Chain Punches'], ['Jik Jeun', 'Straight/Vertical Palm'], ['Wan Jeun', 'Side Palm'], ['Po Pie', 'Double Palm'], ['Biu Gee', 'Thrusting Fingers'], ['Fak Sau', 'Knife Hand'], ['Jeng Sau', 'Spade Hand'], ['Gor Sau', 'Attacking Arms'], ['Garn Sau', 'Splitting Block'], ['Jut Sau', 'Jerking Hand'], ['Biu Sau', 'Thrusting Hand'], ['Lan Sau', 'Bar Arm'], ['Pak Sau', 'Slapping Hand'], ['Mun Sau', 'Asking Hand'], ['Wu Sau', 'Guard/Prayer Hand'], ['Bong Sau', 'Wing Arm'], ['Bong Chor Sau', 'Wrong/Inside Wing Arm'], ['Die Bong Sau', 'Low Wing Arm'], ['Fook Sau', 'Bridge On Arm'], ['Gum Sau', 'Pinning Hand'], ['Huen Sau', 'Circling Hand'], ['Kau Sau', 'Scooping Hand'], ['Lap Sau', 'Pulling Hand'], ['Tan Sau', 'Palm-up Block'], ['Tok Sau', 'Lifting Arm'], ['Chair Pie', 'Trapping Elbow'], ['Gwoi Jarn', 'Kneeling Elbow'], ['Jum Sau', 'Sinking/sunken Elbow'], ['Kup Jarn', 'Vertical Elbow'], ['Pie Jarn', 'Level Elbow'], ['Poon Sau', 'Rolling Arms'], ['Chi Sau', 'Sticking Hands'], ['Dan Chi Sau', 'Single Sticking Hand'], ['Dok Sau', 'Inquisitive Arms'], ['Kwun Sau', 'Rotating Arms'], ['Biu Mar', 'Arrow Stepping'], ['Chi Gurk', 'Sticking Legs'], ['Chuen Mar', 'Turning Stance'], ['Huen Mar', 'Circular Stepping'], ['Sarm Bok Mar', 'Three-Point Stepping'], ['Yee Gee Kim Yuen Mar', 'Character-2 Adduction Stance'], ['Bat Jam Dao', 'Eight Cutting Broadswords'], ['Luk Deem Boon Kwon', 'Six & a half Point Pole'], ['Siu Lim Tao', 'Little Idea'], ['Chum Kiu', 'Searching for the Bridge'], ['Biu Gee', 'Thrusting Fingers'], ['Muk Yan Jong Fat', 'Wooden Dummy Form'], ['Chung Sum Seen', 'Central Heart Line'], ['Say Mm Seen', 'Meridian Line'], ['Jik Seen', 'Straight Line'], ['Kung Fu', 'Hard Work/Effort'], ['Gung Lik', 'Energy/Hard Work'], ['Sun Lik', 'Relaxed/Withdrawing Energy'], ['Kwoon', 'School/Training Room'], ['Lop Sau Ching Choi', 'Loose hand thrust forward'], ['P.E.R.T.', 'Position, Energy, Reaction, Technique'], ['Si Fu', 'Teacher'], ['Si Gung', 'Teacher\'s Teacher'], ['Si Hing', 'Older (more experienced) Kung Fu Brother'], ['Si Die', 'Younger (less experienced) Kung Fu Brother'], ['Si Bat', 'Your Techer\'s Older Kung Fu Brother'], ['Si Sup', 'Your Techer\'s Younger Kung Fu Brother'], ['Si Mo', 'Your Teacher\'s Wife'], ['Wing Chun', 'Beautiful Springtime'], ['Gung Hay Fat Choi', 'Happy New (best/first) Year'], ['Hai', 'Yes'], ['Ho Mar', 'Hello/How do you do?'], ['Lay Ho Mar', '"After you" (respectfully)'], ['Mm Goy', 'Please/Thankyou'], ['Mo', 'No'], ['Mm Hai', 'No'], ['Mou Man Tai', 'No problem (you\'re welcome)'], ['Mm Sai [Haak Hei]', 'Don\'t mention it (you\'re welcome)'], ['Tsing Tao Fai Lot', 'Happy Christmas'], ['Yam Tsing', 'Cheers!'], ['Ling', '0'], ['Yat', '1'], ['Yee', '2'], ['Sarm', '3'], ['Say', '4'], ['Mm', '5'], ['Luk', '6'], ['Tat', '7'], ['Bat', '8'], ['Gowe', '9'], ['Sap', '10'], ['Sap Yat', '11'], ['Sap Yee', '12'], ['Yee Sap', '20'], ['Yee Sap Yat', '21'], ['Yee Sap Yee', '22'], ['Sarm Sap', '30'], ['Sarm Sap Yat', '31'], ['Gowe Sap Gowe', '99'], ['Yat Baak', '100'], ['Yat Cheen', '1000']];

  _.templateSettings = {
    interpolate: /\{\{(.+?)\}\}/g
  };

  APP = {
    Views: {},
    Models: {},
    Collections: {}
  };

  APP.Models.Card = (function(_super) {

    __extends(Card, _super);

    function Card() {
      Card.__super__.constructor.apply(this, arguments);
    }

    Card.prototype.defaults = {
      term: "Term",
      translation: "Translation"
    };

    return Card;

  })(Backbone.Model);

  APP.Collections.Deck = (function(_super) {

    __extends(Deck, _super);

    function Deck() {
      Deck.__super__.constructor.apply(this, arguments);
    }

    Deck.prototype.model = APP.Models.Card;

    return Deck;

  })(Backbone.Collection);

  APP.Views.Shuffle = (function(_super) {

    __extends(Shuffle, _super);

    function Shuffle() {
      Shuffle.__super__.constructor.apply(this, arguments);
    }

    Shuffle.prototype.el = 'body';

    Shuffle.prototype.events = {
      'click #body': 'iterate'
    };

    Shuffle.prototype.count = 0;

    Shuffle.prototype.current = 0;

    Shuffle.prototype.tplTerm = _.template('<dfn id="term">{{term}}</dfn>');

    Shuffle.prototype.tplTranslation = _.template('<dfn id="translation">{{translation}}</dfn>');

    Shuffle.prototype.initialize = function() {
      _.bindAll(this, 'render', 'iterate', 'showTerm', 'showTranslation', 'reset');
      this.count = this.collection.length;
      return this.showTerm();
    };

    Shuffle.prototype.reset = function() {
      return this.collection = new APP.Collections.Deck(getCards());
    };

    Shuffle.prototype.render = function() {
      return this;
    };

    Shuffle.prototype.iterate = function() {
      if (this.current > this.count) this.reset();
      if ($('#translation').size()) {
        return this.showTerm();
      } else {
        return this.showTranslation();
      }
    };

    Shuffle.prototype.showTerm = function() {
      var model;
      model = this.collection.at(this.current);
      $('#body').empty();
      return $('#body').append(this.tplTerm(model.toJSON()));
    };

    Shuffle.prototype.showTranslation = function() {
      var model;
      model = this.collection.at(this.current);
      $('#body').append(this.tplTranslation(model.toJSON()));
      return this.current++;
    };

    return Shuffle;

  })(Backbone.View);

  shuffle = function(array) {
    var current, tmp, top;
    top = array.length;
    while (--top) {
      current = Math.floor(Math.random() * (top + 1));
      tmp = array[current];
      array[current] = array[top];
      array[top] = tmp;
    }
    return array;
  };

  getCards = function() {
    var cards, item;
    return cards = (function() {
      var _i, _len, _ref, _results;
      _ref = shuffle(terms);
      _results = [];
      for (_i = 0, _len = _ref.length; _i < _len; _i++) {
        item = _ref[_i];
        _results.push(new APP.Models.Card({
          term: item[0],
          translation: item[1]
        }));
      }
      return _results;
    })();
  };

  $(function() {
    APP.Shuffle = new APP.Views.Shuffle({
      collection: new APP.Collections.Deck(getCards())
    });
    return APP.Shuffle.render();
  });

}).call(this);
