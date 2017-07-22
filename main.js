/** Game of Hands
 *	by Russ Rizzo
 *	coded by Alex Nelson
*/
	var playerList = [
	'vitaly-abramov-8479411', 'josh-anderson-8476981', 'cam-atkinson-8474715', 'oliver-bjorkstrand-8477416',
	'matt-calvert-8474685', 'zac-dalpe-8474610', 'brandon-dubinsky-8471273', 'nick-foligno-8473422',
	'markus-hannikainen-8478541', 'boone-jenner-8476432', 'sonny-milano-8477947', 'tyler-motte-8477353',
	'artemi-panarin-8478550', 'jordan-schroeder-8475147', 'lukas-sedlak-8476310', 'alexander-wennberg-8477505',
	'gabriel-carlsson-8478506', 'cameron-gaunce-8474611', 'scott-harrington-8476449', 'jack-johnson-8471677',
	'seth-jones-8477495', 'ryan-murray-8476850', 'david-savard-8475233', 'zach-werenski-8478460', 'brian-boyle-8470619',
	'taylor-hall-8475791', 'adam-henrique-8474641', 'marcus-johansson-8475149', 'stefan-noesen-8476474',
	'kyle-palmieri-8475151', 'pavel-zacha-8478401',	'travis-zajac-8471233', 'andy-greene-8472382', 'ben-lovejoy-8473933',
	'john-moore-8475186', 'dalton-prout-8474774', 'damon-severson-8476923', 'josh-bailey-8474573', 'mathew-barzal-8478445',
	'anthony-beauvillier-8478463', 'jason-chimera-8466251',	'casey-cizikas-8475231', 'cal-clutterbuck-8473504',
	'jordan-eberle-8474586', 'joshua-ho-sang-8477959', 'nikolay-kulemin-8473579', 'andrew-ladd-8471217', 'anders-lee-8475314',
	'brock-nelson-8475754', 'shane-prince-8476386', 'alan-quine-8476409', 'john-tavares-8475166', 'johnny-boychuk-8470187',
	'calvin-de-haan-8475177', 'thomas-hickey-8474066', 'nick-leddy-8475181', 'scott-mayfield-8476429', 'adam-pelech-8476917',
	'ryan-pulock-8477506', 'dennis-seidenberg-8469619', 'pavel-buchnevich-8477402',	'david-desharnais-8471976',
	'jesper-fast-8475855', 'michael-grabner-8473546', 'kevin-hayes-8475763', 'nicklas-jensen-8476482', 'chris-kreider-8475184',
	'j-t-miller-8476468', 'rick-nash-8470041', 'matt-puempel-8476477', 'jimmy-vesey-8476918', 'mika-zibanejad-8476459',
	'mats-zuccarello-8475692', 'anthony-deangelo-8477950', 'nick-holden-8474207', 'steven-kampfer-8474000',	'kevin-klein-8470630',
	'ryan-mcdonagh-8474151', 'kevin-shattenkirk-8474031', 'brady-skjei-8476869', 'brendan-smith-8474090', 'marc-staal-8471686',
	'sean-couturier-8476461', 'valtteri-filppula-8470047', 'claude-giroux-8473512', 'travis-konecny-8478439',
	'jori-lehtera-8474627', 'roman-lyubimov-8479648', 'michael-raffl-8477290', 'matt-read-8476177', 'wayne-simmonds-8474190',
	'jakub-voracek-8474161', 'jordan-weal-8475738', 'dale-weise-8474668', 'shayne-gostisbehere-8476906', 'radko-gudas-8475462',
	'andrew-macdonald-8473584', 'brandon-manning-8475430', 'ivan-provorov-8478500', 'josh-archibald-8476326',
	'sidney-crosby-8471675', 'jake-guentzel-8477404', 'carl-hagelin-8474176', 'patric-hornqvist-8471887', 'phil-kessel-8473548',
	'tom-kuhnhackl-8475832', 'evgeni-malkin-8471215', 'ryan-reaves-8471817', 'carter-rowney-8477240', 'bryan-rust-8475810',
	'garrett-wilson-8475253', 'scott-wilson-8476293', 'ian-cole-8474013', 'brian-dumoulin-8475208', 'matt-hunwick-8471436',
	'kris-letang-8471724', 'olli-maatta-8476874', 'errick-pouliot-8476884', 'chad-ruhwedel-8477244', 'justin-schultz-8474602',
	'nicklas-backstrom-8473563', 'jay-beagle-8474291', 'andre-burakovsky-8477444', 'brett-connolly-8475792', 'lars-eller-8474189',
	'evgeny-kuznetsov-8475744',	't-j-oshie-8471698', 'alex-ovechkin-8471214', 'tom-wilson-8476880', 'john-carlson-8474590',
	'matt-niskanen-8471702', 'dmitry-orlov-8475200', 'brooks-orpik-8468498', 'sebastian-aho-8478427', 'phillip-di-giuseppe-8476858',
	'josh-jooris-8477591', 'marcus-kruger-8475323', 'elias-lindholm-8477496', 'joakim-nordstrom-8475807', 'victor-rask-8476437',
	'jeff-skinner-8475784',	'jordan-staal-8473533', 'lee-stempniak-8470740', 'teuvo-teravainen-8476882', 'justin-williams-8468508',
	'klas-dahlbeck-8476403', 'justin-faulk-8475753', 'noah-hanifin-8478396', 'brett-pesce-8477488', 'jaccob-slavin-8476958',
	'trevor-van-riemsdyk-8477845', 'david-backes-8470655', 'matt-beleskey-8473492', 'patrice-bergeron-8470638',
	'david-krejci-8471276', 'brad-marchand-8473419', 'riley-nash-8474062', 'david-pastrnak-8477956', 'frank-vatrano-8478366',
	'brandon-carlo-8478443', 'zdeno-chara-8465009',	'torey-krug-8476792', 'adam-mcquaid-8471717', 'kevan-miller-8476191',
	'paul-postma-8474074', 'nicolas-deslauriers-8475235', 'jack-eichel-8478403', 'zemgus-girgensons-8476878',
	'seth-griffith-8476495', 'jacob-josefson-8475185', 'evander-kane-8475169', 'johan-larsson-8475728', 'matt-moulson-8470852',
	'ryan-o-reilly-8475158', 'kyle-okposo-8473449', 'jason-pominville-8469506',	'benoit-pouliot-8471678', 'sam-reinhart-8477933',
	'nathan-beaulieu-8476470', 'zach-bogosian-8474567', 'justin-falk-8473992', 'taylor-fedun-8476166', 'josh-gorges-8470324',
	'jake-mccabe-8476931', 'rasmus-ristolainen-8477499',	'marco-scandella-8474618', 'justin-abdelkader-8471716',
	'andreas-athanasiou-8476960', 'johan-franzen-8471309', 'luke-glendening-8476822', 'darren-helm-8471794', 'dylan-larkin-8477946',
	'anthony-mantha-8477511', 'frans-nielsen-8470144', 'gustav-nyquist-8474679', 'riley-sheahan-8475772', 'tomas-tatar-8475193',
	'henrik-zetterberg-8468083', 'trevor-daley-8470110', 'danny-dekeyser-8477215', 'jonathan-ericsson-8470318',
	'mike-green-8471242', 'nick-jensen-8475324', 'niklas-kronwall-8468509', 'xavier-ouellet-8476443', 'ryan-sproul-8476450',
	'aleksander-barkov-8477493', 'nick-bjugstad-8475760', 'jonathan-huberdeau-8476456', 'derek-mackenzie-8468001',
	'denis-malgin-8478843', 'colton-sceviour-8474098', 'vincent-trocheck-8476389', 'radim-vrbata-8468085', 'jason-demers-8474218',
	'aaron-ekblad-8477932', 'michael-matheson-8476875', 'ian-mccoshen-8477452', 'alex-petrovic-8475755', 'mark-pysyk-8475796',
	'keith-yandle-8471735',	'paul-byron-8474038', 'phillip-danault-8476479', 'jonathan-drouin-8477494',	'alex-galchenyuk-8476851',
	'brendan-gallagher-8475848', 'ales-hemsky-8469466', 'torrey-mitchell-8471338', 'max-pacioretty-8474157',
	'tomas-plekanec-8469521', 'andrew-shaw-8476381', 'karl-alzner-8473991', 'jordie-benn-8474818', 'joe-morrow-8476476',
	'jeff-petry-8473507', 'david-schlemko-8473673', 'shea-weber-8470642', 'derick-brassard-8473544', 'alexandre-burrows-8470358',
	'ryan-dzingel-8476288',	'mike-hoffman-8474884', 'clarke-macarthur-8470667', 'jean-gabriel-pageau-8476419', 'bobby-ryan-8471676',
	'zack-smith-8474250', 'mark-stone-8475913', 'nate-thompson-8470775', 'kyle-turris-8474068', 'j-t-brown-8476806',
	'ryan-callahan-8471339', 'alex-killorn-8473986', 'nikita-kucherov-8476453', 'chris-kunitz-8470543',
	'vladislav-namestnikov-8476480', 'cedric-paquette-8476975', 'brayden-point-8478010', 'steven-stamkos-8474564',
	'braydon-coburn-8470601', 'victor-hedman-8475167', 'anton-stralman-8471873', 'andrej-sustr-8477205', 'tyler-bozak-8475098',
	'connor-brown-8477015', 'eric-fehr-8470611', 'zach-hyman-8475786', 'nazem-kadri-8475172', 'leo-komarov-8473463',
	'josh-leivo-8476410', 'patrick-marleau-8466139', 'mitchell-marner-8478483', 'matt-martin-8474709', 'auston-matthews-8479318',
	'dominic-moore-8468575', 'william-nylander-8477939', 'ben-smith-8474727', 'nikita-soshnikov-8478373',
	'james-van-riemsdyk-8474037', 'connor-carrick-8476941', 'jake-gardiner-8474581', 'ron-hainsey-8468493',
	'alexey-marchenko-8476289', 'martin-marincin-8475716', 'morgan-rielly-8476853','nikita-zaitsev-8479458',

	'artem-anisimov-8473573', 'ryan-hartman-8477451', 'john-hayden-8477401', 'vinnie-hinostroza-8476994',
	'marian-hossa-8466148', 'tomas-jurco-8476430', 'patrick-kane-8474141', 'tanner-kero-8478528', 'richard-panik-8475209',
	'brandon-saad-8476438', 'nick-schmaltz-8477951', 'patrick-sharp-8469544', 'jonathan-toews-8473604',
	'jordin-tootoo-8469547', 'tommy-wingels-8474739', 'gustav-forsling-8478055', 'duncan-keith-8470281',
	'michal-kempny-8479482', 'connor-murphy-8476473', 'michal-rozsival-8465058', 'brent-seabrook-8470607',
	'sven-andrighetto-8477413', 'joe-colborne-8474577', 'blake-comeau-8471260', 'j-t-compher-8477456',
	'matt-duchene-8475168', 'tyson-jost-8479370', 'gabriel-landeskog-8476455', 'nathan-mackinnon-8477492',
	'matt-nieto-8476442', 'mikko-rantanen-8478420', 'carl-soderberg-8471262', 'colin-wilson-8474569',
	'nail-yakupov-8476855', 'mark-barberio-8474717', 'tyson-barrie-8475197', 'erik-johnson-8473446',
	'nikita-zadorov-8477507', 'jamie-benn-8473994', 'adam-cracknell-8471490', 'radek-faksa-8476889',
	'brian-flynn-8476808', 'martin-hanzal-8471691', 'mattias-janmark-8477406', 'curtis-mckenzie-8475310',
	'tyler-pitlick-8475752', 'alexander-radulov-8471228', 'brett-ritchie-8476439', 'antoine-roussel-8474849',
	'tyler-seguin-8475794', 'devin-shore-8476913', 'jason-spezza-8469455', 'dan-hamhuis-8469465',
	'stephen-johns-8475730', 'john-klingberg-8475906', 'esa-lindell-8476902', 'marc-methot-8470760',
	'patrik-nemeth-8475747', 'jamie-oleksiak-8476467', 'greg-pateryn-8474688', 'charlie-coyle-8475745',
	'tyler-ennis-8474589', 'joel-eriksson-ek-8478493', 'marcus-foligno-8475220', 'mikael-granlund-8475798',
	'mikko-koivu-8469459', 'nino-niederreiter-8475799', 'zach-parise-8470610', 'eric-staal-8470595',
	'chris-stewart-8473485', 'jason-zucker-8475722', 'jonas-brodin-8476463', 'matt-dumba-8476856',
	'gustav-olofsson-8477467', 'kyle-quincey-8470724', 'mike-reilly-8476422', 'jared-spurgeon-8474716',
	'ryan-suter-8470600', 'pontus-aberg-8476857', 'viktor-arvidsson-8478042', 'nick-bonino-8474009',
	'kevin-fiala-8477942', 'filip-forsberg-8476887', 'frederick-gaudreau-8477919', 'scott-hartnell-8468486',
	'calle-jarnkrok-8475714', 'ryan-johansen-8475793', 'cody-mcleod-8471657', 'miikka-salomaki-8476447',
	'colton-sissons-8476925', 'craig-smith-8475225', 'austin-watson-8475766', 'mattias-ekholm-8475218',
	'ryan-ellis-8475176', 'alexei-emelin-8471296', 'matt-irwin-8475625', 'roman-josi-8474600',
	'p-k-subban-8474056', 'yannick-weber-8474134', 'beau-bennett-8475761', 'patrik-berglund-8473534',
	'kyle-brodziak-8470803', 'robby-fabbri-8477952', 'dmitrij-jaskin-8476436', 'magnus-paajarvi-8475175',
	'brayden-schenn-8475170', 'jaden-schwartz-8475768', 'vladimir-sobotka-8471743', 'paul-stastny-8471669',
	'alexander-steen-8470257', 'vladimir-tarasenko-8475765', 'chris-thorburn-8469501', 'robert-bortuzzo-8474145',
	'jay-bouwmeester-8470151', 'joel-edmundson-8476441', 'carl-gunnarsson-8474125', 'colton-parayko-8476892',
	'alex-pietrangelo-8474565', 'joel-armia-8476469', 'kyle-connor-8478398', 'andrew-copp-8477429',
	'marko-dano-8477448', 'nikolaj-ehlers-8477940', 'patrik-laine-8479339', 'bryan-little-8473412',
	'adam-lowry-8476392', 'shawn-matthias-8473574', 'mathieu-perreault-8473618', 'nic-petan-8477464',
	'mark-scheifele-8476460', 'michael-sgarbossa-8475958', 'brandon-tanev-8479293', 'blake-wheeler-8471218',
	'dustin-byfuglien-8470834', 'ben-chiarot-8475279', 'toby-enstrom-8470828', 'dmitry-kulikov-8475179',
	'josh-morrissey-8477504','tyler-myers-8474574', 'jacob-trouba-8476885', 'jared-boll-8471766',
	'andrew-cogliano-8471699', 'patrick-eaves-8470622', 'ryan-getzlaf-8470612', 'derek-grant-8474683',
	'ondrej-kase-8478131', 'nicolas-kerdiles-8476866', 'ryan-kesler-8470616', 'corey-perry-8470621',
	'rickard-rakell-8476483', 'nick-ritchie-8477941', 'logan-shaw-8476400', 'jakob-silfverberg-8475164',
	'antoine-vermette-8468535', 'chris-wagner-8475780', 'kevin-bieksa-8469598', 'cam-fowler-8475764',
	'korbinian-holzer-8473560', 'hampus-lindholm-8476854', 'josh-manson-8476312', 'brandon-montour-8477986',
	'steve-oleksy-8476162', 'sami-vatanen-8475222', 'nick-cousins-8476393', 'lawson-crouse-8478474',
	'max-domi-8477503', 'anthony-duclair-8477407', 'christian-dvorak-8477989', 'clayton-keller-8479343',
	'jordan-martinook-8476921', 'jamie-mcginn-8473465', 'brendan-perlini-8477943', 'brad-richardson-8470755',
	'tobias-rieder-8476356', 'derek-stepan-8474613', 'jakob-chychrun-8479345', 'adam-clendening-8476431',
	'kevin-connauton-8475246', 'oliver-ekman-larsson-8475171', 'alex-goligoski-8471274', 'niklas-hjalmarsson-8471769',
	'luke-schenn-8474568', 'mikael-backlund-8474150', 'sam-bennett-8477935', 'troy-brouwer-8471426',
	'micheal-ferland-8475907', 'michael-frolik-8473564', 'johnny-gaudreau-8476346', 'freddie-hamilton-8475878',
	'curtis-lazar-8477508', 'sean-monahan-8477497', 'matt-stajan-8470162', 'matthew-tkachuk-8479314',
	'kris-versteeg-8471346', 'matt-bartkowski-8474749', 'tj-brodie-8474673', 'mark-giordano-8470966',
	'dougie-hamilton-8476462', 'travis-hamonic-8474612', 'michael-stone-8474628', 'drake-caggiula-8479465',
	'leon-draisaitl-8477934', 'zack-kassian-8475178', 'jujhar-khaira-8476915', 'mark-letestu-8473914',
	'milan-lucic-8473473', 'patrick-maroon-8474034', 'connor-mcdavid-8478402', 'ryan-nugent-hopkins-8476454',
	'iiro-pakarinen-8476336', 'anton-slepyshev-8477415', 'ryan-strome-8476458', 'mark-fayne-8471816',
	'eric-gryba-8473468', 'oscar-klefbom-8476472', 'adam-larsson-8476457', 'darnell-nurse-8477498',
	'kris-russell-8471729', 'andrej-sekera-8471284', 'ryan-stanton-8475598', 'andy-andreoff-8476404',
	'dustin-brown-8470606', 'jeff-carter-8470604', 'kyle-clifford-8475160', 'nic-dowd-8475343',	'marian-gaborik-8468483',
	'anze-kopitar-8471685', 'trevor-lewis-8473453', 'jordan-nolan-8475325', 'tanner-pearson-8476871', 'nick-shore-8476406',
	'tyler-toffoli-8475726', 'drew-doughty-8474563', 'christian-folin-8477850', 'derek-forbort-8475762',
	'paul-ladue-8476983', 'alec-martinez-8474166', 'jake-muzzin-8474162', 'mikkel-boedker-8474571', 'logan-couture-8474053', 'joonas-donskoi-8475820',
	'jannik-hansen-8471498', 'tomas-hertl-8476881', 'melker-karlsson-8477922', 'joe-pavelski-8470794',
	'joe-thornton-8466138', 'chris-tierney-8476919', 'joel-ward-8468208', 'justin-braun-8474027',
	'brent-burns-8470613', 'dylan-demelo-8476331', 'brenden-dillon-8475455', 'paul-martin-8468542',
	'marc-edouard-vlasic-8471709', 'sven-baertschi-8476466', 'alexander-burmistrov-8475788', 'derek-dorsett-8473432',
	'loui-eriksson-8470626', 'sam-gagner-8474040', 'brendan-gaunce-8476867', 'nikolay-goldobin-8477958',
	'markus-granlund-8476440', 'bo-horvat-8477500', 'jayson-megna-8477126', 'anton-rodin-8475210', 'daniel-sedin-8467875',
	'henrik-sedin-8467876', 'brandon-sutter-8474091', 'alex-biega-8473415', 'michael-del-zotto-8474584',
	'alexander-edler-8471303', 'erik-gudbranson-8475790', 'ben-hutton-8477018', 'troy-stecher-8479442',
	'christopher-tanev-8475690', 'nikita-tryamkin-8477997', 'patrick-wiercioch-8474605', 'pierre-edouard-bellemare-8477930',
	'william-carrier-8477478', 'david-clarkson-8470920', 'reid-duke-8478097', 'cody-eakin-8475236',
	'mikhail-grabovski-8471362', 'erik-haula-8475287', 'william-karlsson-8476448', 'brendan-leipsic-8476894',
	'oscar-lindberg-8475715', 'jonathan-marchessault-8476539', 'james-neal-8471707', 'tomas-nosek-8477931',
	'david-perron-8474102', 'teemu-pulkkinen-8475800', 'reilly-smith-8475191', 'alex-tuch-8477949',
	'deryk-engelland-8468674', 'jason-garrison-8474520', 'brayden-mcnabb-8475188', 'jon-merrill-8475750',
	'colin-miller-8476525', 'griffin-reinhart-8476852', 'luca-sbisa-8474579',  'nate-schmidt-8477220',
	'clayton-stoner-8470886', 'shea-theodore-8477447', 'pavel-datsyuk-8467514', 'jaromir-jagr-8448208'
];
//left handed = 0, right handed = 1

var answerList = [
	0,1,1,1,0,1,0,0,0,0,0,0,1,1,0,0,0,0,0,0,1,0,1,0,0,0,0,0,1,1,0,1,0,1,0,1,1,0,1,0,0,0,1,1,1,0,0,0,0,0,0,0,1,0,0,0,1,0,1,0,0,0,
	1,0,0,0,0,1,0,0,0,1,0,1,0,1,1,0,1,0,0,0,0,0,1,1,0,1,0,1,1,0,1,1,0,1,0,0,0,1,0,0,0,1,1,0,0,1,1,1,0,0,0,0,0,1,0,0,1,1,0,1,0,1,
	0,0,1,1,1,1,1,0,0,0,0,1,0,1,0,0,0,0,1,0,1,0,1,0,1,0,1,1,0,1,1,0,1,1,0,1,0,0,1,1,1,0,1,0,1,0,0,0,0,0,1,1,0,1,0,1,0,1,0,0,1,0,
	0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,1,1,0,0,1,0,1,0,0,1,1,1,1,1,1,0,0,1,1,0,0,0,0,0,1,1,1,0,0,1,0,0,0,1,0,1,0,0,0,0,0,1,1,0,1,0,1,
	1,1,0,0,0,0,0,1,1,0,0,1,1,1,1,1,1,0,0,1,0,1,0,0,0,1,1,0,0,1,0,0,1,0,0,1, 0,1,1,1,0,0,0,0,0,0,1,1,

	0,1,1,0,0,0,1,1,1,0,0,1,1,0,0,0,1,0,0,0,0,0,0,1,1,0,0,1,0,1,0,0,0,1,0,1,0,1,0,1,0,1,1,0,0,0,0,1,1,0,0,0,0,0,0,0,0,1,0,0,1,0,
	0,0,1,0,1,1,0,0,1,1,0,1,1,0,0,1,1,1,0,1,0,0,0,1,1,1,0,1,0,0,0,0,0,0,0,0,0,1,1,0,0,0,1,1,1,0,0,0,0,1,1,0,0,0,0,1,0,0,1,1,0,0,
	0,0,1,1,1,0,1,1,0,1,0,1,1,1,0,1,1,0,1,1,0,1,0,1,1,1,1,0,0,0,0,0,0,0,0,0,0,0,1,0,1,0,0,0,0,1,0,0,1,0,0,0,1,1,0,0,0,1,0,0,0,1,
	1,1,0,0,1,0,1,0,0,0,0,1,1,1,1,1,0,1,0,0,0,0,0,1,1,0,1,0,0,1,0,0,1,1,1,1,0,1,0,0,0,0,1,1,0,1,1,0,0,1,1,1,1,0,0,0,0,0,1,0,1,0,
	0,0,0,1,0,0,0,1,1,0,0,1,0,1,1,0,0,0,0,1,1,0,0,0,0,0,0,1,0,0,1,1,0,1,1,0,0,0,1,0,0,0,0,0,0,0
];

var index = 0;
var displayImage = document.getElementById('images');
var displayName = document.getElementById('names');
var userScore = 0;
var finalScore = 0;
var guess = -1;

function buildImage() {
	//alert("players "+ playerList.length+ " answers "+ answerList.length);
	finalScore = userScore;
	userScore = 0;
	getRandomIndex();
	document.getElementById("score").innerHTML = userScore;
	document.getElementById("images").src = getImage(index);
	document.getElementById("names").innerHTML = getName(index);
/*
	var img = document.createElement('img');
	img.src = playerImg[index];
	var name = document.createTextNode(playerName[index]);
	document.getElementById('content').appendChild(img);
*/
}

function changeImage(){
	getRandomIndex();
	document.getElementById("images").src = getImage(index);
	document.getElementById("names").innerHTML = getName(index);
	// document.getElementById("score").innerHTML = userScore;
}

// stuff = 'alec-martinez-8474166'
function textEdit(stuff){
	var output = stuff.replace(/-/g, " ");
	//output = output.replace(/[^0-9]/g, '');
	//output = output.slice(null, -7);
	return output;
}

function getName(number){
	var name = textEdit(playerList[number]);
	var output = name.replace(/[0-9]/g, '');
	return output;
}

// link = 'alec-martinez-8474166'
function getImage(number){
	var input = playerList[number];
	var output = input.replace(/[^0-9]/g, '');
	link = 'https://nhl.bamcontent.com/images/headshots/current/168x168/' + output + '@2x.jpg';
	return link;
}

function youLost() {
	localStorage.setItem("score", finalScore);
}

function nextPage() {
	userScore = localStorage.getItem("score");
	document.getElementById("score").innerHTML = userScore;
}

function addScore(){
	userScore = userScore + 1;
	document.getElementById("score").innerHTML = userScore;
}

function myFunctionLeft(){
	guess = 0;
	if(guess === answerList[index]){
		changeImage();
		addScore();
	}
	else{
		finalScore = userScore;
		youLost();
		location.assign("game_over.html");
		document.getElementById("score").innerHTML = userScore;
		// userScore = 0;
	}
}

function myFunctionRight(){
	guess = 1;
	if(guess === answerList[index]){	
		changeImage();
		addScore();
	}
	else{
		finalScore = userScore;
		youLost();
		location.assign("game_over.html");
		document.getElementById("score").innerHTML = userScore;
		// userScore = 0;
	}
}

function getRandomIndex(){
	index = Math.floor(Math.random() * playerList.length);
}