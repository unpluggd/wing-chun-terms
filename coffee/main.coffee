terms = [
# Basic Attacks
['Kuen','Fist'],
['Yat Chi Kuen','Single Thrusting Punch'],
['Lin Wan Kuen','Chain Punches'],
['Jik Jeun','Straight/Vertical Palm'],
['Wan Jeun','Side Palm'],
['Po Pie','Double Palm'],
['Biu Gee','Thrusting Fingers'],
['Fak Sau','Knife Hand'],
['Jeng Sau','Spade Hand'],
['Gor Sau','Attacking Arms'],

# Primary Blocking Techniques
['Garn Sau','Splitting Block'],
['Jut Sau','Jerking Hand'],
['Biu Sau','Thrusting Hand'],
['Lan Sau','Bar Arm'],
['Pak Sau','Slapping Hand'],
['Mun Sau','Asking Hand'],
['Wu Sau','Guard/Prayer Hand'],

# Secondary Blocking Techniques
['Bong Sau','Wing Arm'],
['Bong Chor Sau','Wrong/Inside Wing Arm'],
['Die Bong Sau','Low Wing Arm'],
['Fook Sau','Bridge On Arm'],
['Gum Sau','Pinning Hand'],
['Huen Sau','Circling Hand'],
['Kau Sau','Scooping Hand'],
['Lap Sau','Pulling Hand'],
['Tan Sau','Palm-up Block'],
['Tok Sau','Lifting Arm'],

# Elbow Techniques
['Chair Pie','Trapping Elbow'],
['Gwoi Jarn','Kneeling Elbow'],
['Jum Sau','Sinking/sunken Elbow'],
['Kup Jarn','Vertical Elbow'],
['Pie Jarn','Level Elbow'],

# Training Techniques
['Poon Sau','Rolling Arms'],
['Chi Sau','Sticking Hands'],
['Dan Chi Sau','Single Sticking Hand'],
['Dok Sau','Inquisitive Arms'],
['Kwun Sau','Rotating Arms'],

# Stances and Stepping
['Biu Mar','Arrow Stepping'],
['Chi Gurk','Sticking Legs'],
['Chuen Mar','Turning Stance'],
['Huen Mar','Circular Stepping'],
['Sarm Bok Mar','Three-Point Stepping'],
['Yee Gee Kim Yuen Mar','Character-2 Adduction Stance'],

# Weapons
['Bat Jam Dao','Eight Cutting Broadswords'],
['Luk Deem Boon Kwon','Six & a half Point Pole'],

# Forms
['Siu Lim Tao','Little Idea'],
['Chum Kiu','Searching for the Bridge'],
['Biu Gee','Thrusting Fingers'],
['Muk Yan Jong Fat','Wooden Dummy Form'],

# Centre-line Theory
['Chung Sum Seen','Central Heart Line'],
['Say Mm Seen','Meridian Line'],
['Jik Seen','Straight Line'],

# General Terms
['Kung Fu','Hard Work/Effort'],
['Gung Lik','Energy/Hard Work'],
['Sun Lik','Relaxed/Withdrawing Energy'],
['Kwoon','School/Training Room'],
['Lop Sau Ching Choi','Loose hand thrust forward'],
['P.E.R.T.','Position, Energy, Reaction, Technique'],
['Si Fu','Teacher'],
['Si Gung','Teacher\'s Teacher'],
['Si Hing','Older (more experienced) Kung Fu Brother'],
['Si Die','Younger (less experienced) Kung Fu Brother'],
['Si Bat','Your Techer\'s Older Kung Fu Brother'],
['Si Sup','Your Techer\'s Younger Kung Fu Brother'],
['Si Mo','Your Teacher\'s Wife'],
['Wing Chun','Beautiful Springtime'],

# Cantonese Phrases
['Gung Hay Fat Choi','Happy New (best/first) Year'],
['Hai','Yes'],
['Ho Mar','Hello/How do you do?'],
['Lay Ho Mar','"After you" (respectfully)'],
['Mm Goy','Please/Thankyou'],
['Mo','No'],
['Mm Hai','No'],
['Mou Man Tai','No problem (you\'re welcome)'],
['Mm Sai [Haak Hei]','Don\'t mention it (you\'re welcome)'],
['Tsing Tao Fai Lot','Happy Christmas'],
['Yam Tsing','Cheers!'],

# Cantonese Numbers
['Ling','0'],
['Yat','1'],
['Yee','2'],
['Sarm','3'],
['Say','4'],
['Mm','5'],
['Luk','6'],
['Tat','7'],
['Bat','8'],
['Gowe','9'],
['Sap','10'],
['Sap Yat','11'],
['Sap Yee','12'],
['Yee Sap','20'],
['Yee Sap Yat','21'],
['Yee Sap Yee','22'],
['Sarm Sap','30'],
['Sarm Sap Yat','31'],
['Gowe Sap Gowe','99'],
['Yat Baak','100'],
['Yat Cheen','1000'],
]

main = () ->
    termblock = $('#term')
    translationblock = $('#translation')

    for term, translation of terms
        do (term, translation) ->
            termblock.html term
            translationblock.html translation


$ ->
    main()
