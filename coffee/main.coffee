# app namespace setup
_.templateSettings =
    interpolate: /\{\{(.+?)\}\}/g

APP =
    Views: {},
    Models: {},
    Collections: {}

class APP.Models.Card extends Backbone.Model
    defaults:
        term: "Term"
        translation: "Translation"

class APP.Collections.Deck extends Backbone.Collection
    model: APP.Models.Card

class APP.Views.Shuffle extends Backbone.View
    el: 'body'

    events:
        'click #body': 'iterate'
        'touchstart #body': 'iterate'

    count: 0
    current: 0

    tplTerm: _.template('<dfn id="term">{{term}}</dfn>')
    tplTranslation: _.template('<dfn id="translation">{{translation}}</dfn>')

    initialize: ->
        _.bindAll(this, 'render', 'iterate', 'showTerm', 'showTranslation', 'reset')
        @count = @collection.length
        @showTerm()

    reset: ->
        @collection = new APP.Collections.Deck getCards()

    render: ->
        return this

    iterate: ->
        # reset when we reach the end of the deck
        @reset() if @current > @count

        if $('#translation').size()
            @showTerm()
        else
            @showTranslation()

    showTerm: ->
        model = @collection.at @current
        $('#body').empty()
        $('#body').append(@tplTerm(model.toJSON()))

    showTranslation: ->
        model = @collection.at @current
        $('#body').append @tplTranslation model.toJSON()
        @current++


shuffle = (array) ->
    top = array.length

    while --top
        current = Math.floor(Math.random() * (top + 1))
        tmp = array[current]
        array[current] = array[top]
        array[top] = tmp

    return array

getCards = ->
    cards = for item in shuffle(terms)
        new APP.Models.Card
            term: item[0]
            translation: item[1]


$ ->
    APP.Shuffle = new APP.Views.Shuffle
        collection: new APP.Collections.Deck getCards()

    APP.Shuffle.render()

