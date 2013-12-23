'use strict';

angular.module('vizApp')
  .service('Data',function() {
  	this.getData = function() {
  		return [
   	{
		"name": "Fuller",
		"address": "P.O. Box 144, 1175 Mi Rd.",
		"mail": "a@quistristiqueac.edu",
		"phone": "03 54 62 93 94"
	},
	{
		"name": "Tanek",
		"address": "8781 Diam Street",
		"mail": "ut@necenim.org",
		"phone": "07 82 14 40 93"
	},
	{
		"name": "Fulton",
		"address": "Ap #148-6792 Maecenas Road",
		"mail": "nulla@nequeNullam.org",
		"phone": "07 36 66 15 34"
	},
	{
		"name": "Noah",
		"address": "231-3336 Mi St.",
		"mail": "netus.et@sociis.ca",
		"phone": "04 09 91 10 56"
	},
	{
		"name": "Lars",
		"address": "796-2555 Orci St.",
		"mail": "vel.sapien@mitempor.com",
		"phone": "08 27 42 13 50"
	},
	{
		"name": "Stuart",
		"address": "Ap #535-7293 Auctor. Av.",
		"mail": "neque.In@ac.edu",
		"phone": "08 98 68 86 88"
	},
	{
		"name": "Palmer",
		"address": "Ap #703-1473 Tristique Road",
		"mail": "elit.pretium@dolor.com",
		"phone": "02 34 61 03 24"
	},
	{
		"name": "Jordan",
		"address": "179-7896 Nec St.",
		"mail": "Duis.sit@vestibulumMaurismagna.com",
		"phone": "08 25 54 90 64"
	},
	{
		"name": "Nehru",
		"address": "657-1479 Natoque Rd.",
		"mail": "Donec.tempor@eget.ca",
		"phone": "07 36 07 27 63"
	},
	{
		"name": "Richard",
		"address": "P.O. Box 508, 7209 Pharetra. Rd.",
		"mail": "Phasellus.dapibus@tortoratrisus.edu",
		"phone": "01 19 18 12 46"
	},
	{
		"name": "Troy",
		"address": "240-3326 Sodales. Rd.",
		"mail": "cursus.et.magna@et.ca",
		"phone": "07 42 11 15 40"
	},
	{
		"name": "Joseph",
		"address": "4724 Ligula St.",
		"mail": "venenatis@diam.com",
		"phone": "04 84 89 25 02"
	},
	{
		"name": "Troy",
		"address": "P.O. Box 226, 8763 Nunc Road",
		"mail": "ut@orciluctus.ca",
		"phone": "03 82 51 23 13"
	},
	{
		"name": "Ali",
		"address": "P.O. Box 147, 9585 Ante. St.",
		"mail": "lectus.pede.ultrices@enimmi.ca",
		"phone": "04 20 58 13 36"
	},
	{
		"name": "Uriel",
		"address": "P.O. Box 833, 6582 Neque Rd.",
		"mail": "nonummy.ut@cursusin.co.uk",
		"phone": "06 44 19 20 66"
	},
	{
		"name": "Castor",
		"address": "P.O. Box 745, 1531 Cras Rd.",
		"mail": "aliquet.odio@Incondimentum.net",
		"phone": "06 78 88 64 39"
	},
	{
		"name": "Tiger",
		"address": "4717 Libero St.",
		"mail": "sit@dictumplacerataugue.edu",
		"phone": "01 73 16 60 84"
	},
	{
		"name": "Yasir",
		"address": "2556 Amet Av.",
		"mail": "litora@mattis.ca",
		"phone": "01 15 99 80 90"
	},
	{
		"name": "Declan",
		"address": "Ap #432-4975 Ac Rd.",
		"mail": "dui.lectus@Praesent.ca",
		"phone": "04 22 61 20 11"
	},
	{
		"name": "Berk",
		"address": "P.O. Box 460, 2881 Ultrices, Rd.",
		"mail": "lacus@semperegestasurna.com",
		"phone": "04 64 11 35 92"
	},
	{
		"name": "Aquila",
		"address": "P.O. Box 678, 594 In, Road",
		"mail": "Cum.sociis@duisemperet.edu",
		"phone": "02 45 88 15 36"
	},
	{
		"name": "Marshall",
		"address": "P.O. Box 396, 3174 Litora Rd.",
		"mail": "sagittis.placerat.Cras@nectempusscelerisque.net",
		"phone": "03 73 74 34 32"
	},
	{
		"name": "Troy",
		"address": "952-6661 Ultrices. Rd.",
		"mail": "pede.ac@mauriserateget.org",
		"phone": "03 18 68 21 06"
	},
	{
		"name": "Axel",
		"address": "3133 Nullam Rd.",
		"mail": "hendrerit@utpellentesqueeget.ca",
		"phone": "03 00 57 84 15"
	},
	{
		"name": "Mason",
		"address": "684-5773 Nulla Avenue",
		"mail": "in@Crasconvallis.com",
		"phone": "03 34 90 65 33"
	},
	{
		"name": "Talon",
		"address": "627-1972 Malesuada Ave",
		"mail": "ipsum@penatibuset.co.uk",
		"phone": "09 28 97 65 62"
	},
	{
		"name": "Caesar",
		"address": "Ap #770-4733 Aliquet, Av.",
		"mail": "vehicula.aliquet@molestie.net",
		"phone": "09 59 59 99 76"
	},
	{
		"name": "Barry",
		"address": "6517 Pretium Ave",
		"mail": "ut.dolor.dapibus@consequat.co.uk",
		"phone": "04 76 51 13 19"
	},
	{
		"name": "Marsden",
		"address": "Ap #996-1640 Hendrerit St.",
		"mail": "a.auctor@risusQuisque.com",
		"phone": "09 32 62 78 38"
	},
	{
		"name": "Beck",
		"address": "Ap #245-6673 Nunc Av.",
		"mail": "consectetuer@ornaretortorat.co.uk",
		"phone": "09 73 72 88 32"
	},
	{
		"name": "Daquan",
		"address": "8525 Et Rd.",
		"mail": "dui.in.sodales@ligula.edu",
		"phone": "03 13 44 96 19"
	},
	{
		"name": "Lawrence",
		"address": "Ap #329-6071 Tristique Street",
		"mail": "dolor.dapibus.gravida@porttitor.org",
		"phone": "02 85 53 01 50"
	},
	{
		"name": "Brady",
		"address": "Ap #343-3598 Fringilla Avenue",
		"mail": "laoreet@vel.co.uk",
		"phone": "08 22 76 95 34"
	},
	{
		"name": "Dean",
		"address": "946-5188 Ac Street",
		"mail": "sit.amet.metus@orci.com",
		"phone": "04 33 49 22 33"
	},
	{
		"name": "Malcolm",
		"address": "699-744 Nullam Road",
		"mail": "faucibus@SednequeSed.com",
		"phone": "01 53 44 22 78"
	},
	{
		"name": "Levi",
		"address": "Ap #945-6054 Mauris. Road",
		"mail": "libero@vestibulumnec.com",
		"phone": "03 31 25 47 64"
	},
	{
		"name": "Henry",
		"address": "439-9261 Velit. Av.",
		"mail": "libero.Donec.consectetuer@Donecluctusaliquet.com",
		"phone": "01 51 87 15 36"
	},
	{
		"name": "Ray",
		"address": "P.O. Box 529, 7368 Nam Rd.",
		"mail": "dui.nec@vulputateposuerevulputate.org",
		"phone": "01 20 97 58 34"
	},
	{
		"name": "Dillon",
		"address": "1055 Eleifend St.",
		"mail": "torquent.per@turpisIn.ca",
		"phone": "05 92 32 06 80"
	},
	{
		"name": "Phelan",
		"address": "7626 Libero Rd.",
		"mail": "pellentesque@dapibusid.ca",
		"phone": "05 23 17 25 42"
	},
	{
		"name": "Solomon",
		"address": "P.O. Box 767, 6455 Non Rd.",
		"mail": "tincidunt.vehicula@inaliquet.edu",
		"phone": "05 70 35 60 56"
	},
	{
		"name": "Uriah",
		"address": "Ap #864-1848 Nullam Rd.",
		"mail": "facilisi@sagittis.org",
		"phone": "03 40 73 56 59"
	},
	{
		"name": "Hop",
		"address": "Ap #364-6872 Dui, Rd.",
		"mail": "scelerisque@risusaultricies.org",
		"phone": "08 40 85 48 84"
	},
	{
		"name": "Ezekiel",
		"address": "8874 Auctor, Ave",
		"mail": "Proin@sedleoCras.edu",
		"phone": "09 69 23 54 44"
	},
	{
		"name": "Ethan",
		"address": "P.O. Box 501, 923 Felis Rd.",
		"mail": "Integer.sem.elit@infaucibus.net",
		"phone": "08 33 07 02 43"
	},
	{
		"name": "Eagan",
		"address": "5854 Adipiscing Road",
		"mail": "orci.in.consequat@velturpisAliquam.edu",
		"phone": "04 96 45 84 14"
	},
	{
		"name": "Darius",
		"address": "641-2216 Sem Ave",
		"mail": "neque.et@Aliquamerat.com",
		"phone": "09 42 30 15 97"
	},
	{
		"name": "Laith",
		"address": "P.O. Box 481, 1106 Libero. Avenue",
		"mail": "erat.Etiam@purusaccumsaninterdum.com",
		"phone": "05 31 62 06 03"
	},
	{
		"name": "Macon",
		"address": "8178 Vestibulum St.",
		"mail": "dui.in@Sedcongueelit.com",
		"phone": "05 55 27 99 52"
	},
	{
		"name": "Ahmed",
		"address": "2010 Nulla Street",
		"mail": "eu.odio.Phasellus@massarutrum.net",
		"phone": "07 74 21 85 07"
	},
	{
		"name": "Victor",
		"address": "634-6400 Hendrerit St.",
		"mail": "In.faucibus@sodalespurus.com",
		"phone": "06 31 23 60 91"
	},
	{
		"name": "Kato",
		"address": "P.O. Box 218, 3645 Quisque Street",
		"mail": "fermentum.vel@estNunc.co.uk",
		"phone": "04 11 55 89 59"
	},
	{
		"name": "Rogan",
		"address": "189-3892 Bibendum St.",
		"mail": "Duis@duinec.org",
		"phone": "01 75 93 91 55"
	},
	{
		"name": "Wing",
		"address": "5527 A, Street",
		"mail": "mi.tempor@enimSuspendisse.co.uk",
		"phone": "03 44 37 64 33"
	},
	{
		"name": "William",
		"address": "239-9366 Neque. Road",
		"mail": "sapien.cursus@scelerisque.co.uk",
		"phone": "07 38 53 62 11"
	},
	{
		"name": "Hiram",
		"address": "154-7729 Sem Av.",
		"mail": "tempor@idlibero.net",
		"phone": "08 43 99 27 02"
	},
	{
		"name": "Tate",
		"address": "399-9831 Penatibus St.",
		"mail": "diam.Pellentesque@ipsumSuspendissenon.co.uk",
		"phone": "03 16 52 46 68"
	},
	{
		"name": "Thomas",
		"address": "791-7025 Amet Avenue",
		"mail": "nunc.nulla@afeugiat.com",
		"phone": "06 33 86 19 95"
	},
	{
		"name": "Coby",
		"address": "3385 Bibendum Avenue",
		"mail": "venenatis.vel@augue.co.uk",
		"phone": "01 61 27 13 77"
	},
	{
		"name": "Raja",
		"address": "311-5655 Et Avenue",
		"mail": "dignissim@idblandit.co.uk",
		"phone": "06 82 03 54 25"
	},
	{
		"name": "Judah",
		"address": "2222 Lacus Street",
		"mail": "Nunc.commodo.auctor@aliquet.co.uk",
		"phone": "05 34 39 01 62"
	},
	{
		"name": "Ray",
		"address": "Ap #987-7461 At, St.",
		"mail": "luctus.lobortis@morbi.ca",
		"phone": "04 68 38 20 19"
	},
	{
		"name": "Eric",
		"address": "7852 Tristique Rd.",
		"mail": "massa.lobortis@sapienAeneanmassa.ca",
		"phone": "07 05 09 92 98"
	},
	{
		"name": "William",
		"address": "Ap #177-9650 Habitant Ave",
		"mail": "tempor.arcu@aneque.edu",
		"phone": "07 74 16 04 35"
	},
	{
		"name": "Scott",
		"address": "2575 Ante. Ave",
		"mail": "odio.Nam@euligulaAenean.edu",
		"phone": "01 29 39 36 71"
	},
	{
		"name": "Darius",
		"address": "P.O. Box 841, 1149 Libero Road",
		"mail": "Cras.interdum.Nunc@utlacusNulla.edu",
		"phone": "02 59 64 34 96"
	},
	{
		"name": "Hiram",
		"address": "P.O. Box 405, 3049 Tempor Rd.",
		"mail": "velit@metus.ca",
		"phone": "04 58 52 92 14"
	},
	{
		"name": "George",
		"address": "709-9256 Quisque Rd.",
		"mail": "vestibulum.lorem@arcuimperdiet.ca",
		"phone": "02 98 50 76 73"
	},
	{
		"name": "Nero",
		"address": "P.O. Box 818, 3198 Ipsum Av.",
		"mail": "eget.metus@In.org",
		"phone": "03 89 89 09 56"
	},
	{
		"name": "Lev",
		"address": "Ap #580-4410 Tincidunt Rd.",
		"mail": "sodales.at@leoinlobortis.co.uk",
		"phone": "08 88 73 65 14"
	},
	{
		"name": "Quinlan",
		"address": "P.O. Box 428, 2379 Ultricies Street",
		"mail": "Sed@Vestibulum.edu",
		"phone": "08 29 89 13 98"
	},
	{
		"name": "Keegan",
		"address": "P.O. Box 615, 2489 Nec Rd.",
		"mail": "quam@scelerisqueneque.co.uk",
		"phone": "04 78 93 05 68"
	},
	{
		"name": "Mannix",
		"address": "P.O. Box 180, 5788 Luctus, St.",
		"mail": "magnis@auctor.ca",
		"phone": "02 03 31 41 32"
	},
	{
		"name": "Malik",
		"address": "Ap #256-776 Vitae, Avenue",
		"mail": "non@euismodac.edu",
		"phone": "09 85 50 29 37"
	},
	{
		"name": "Cade",
		"address": "7078 Imperdiet St.",
		"mail": "hendrerit.id@quisurna.net",
		"phone": "04 88 56 93 10"
	},
	{
		"name": "Elton",
		"address": "P.O. Box 198, 1916 Dolor. Rd.",
		"mail": "ut.ipsum@Duismi.com",
		"phone": "09 49 67 76 63"
	},
	{
		"name": "Marsden",
		"address": "Ap #492-8821 Neque St.",
		"mail": "magna.Duis.dignissim@lobortismauris.ca",
		"phone": "04 64 13 02 50"
	},
	{
		"name": "Flynn",
		"address": "Ap #295-2579 Tincidunt Ave",
		"mail": "nisi.magna.sed@ametdiam.edu",
		"phone": "03 61 37 59 43"
	},
	{
		"name": "Tad",
		"address": "291 Curabitur Road",
		"mail": "mauris@nonleo.com",
		"phone": "09 84 96 86 93"
	},
	{
		"name": "Cooper",
		"address": "Ap #803-8391 Mauris Ave",
		"mail": "elit.pellentesque.a@congueelitsed.com",
		"phone": "02 64 33 90 29"
	},
	{
		"name": "Kadeem",
		"address": "Ap #344-3985 Mollis Rd.",
		"mail": "ipsum.Suspendisse@vitae.com",
		"phone": "09 12 50 52 85"
	},
	{
		"name": "Vladimir",
		"address": "7173 In St.",
		"mail": "in@aliquetmetus.edu",
		"phone": "06 03 86 85 34"
	},
	{
		"name": "Cullen",
		"address": "Ap #598-9188 Ridiculus Rd.",
		"mail": "Phasellus.vitae.mauris@DuisgravidaPraesent.ca",
		"phone": "01 82 66 91 22"
	},
	{
		"name": "Burton",
		"address": "P.O. Box 975, 6500 Nibh. Rd.",
		"mail": "dolor.Nulla@odioEtiamligula.com",
		"phone": "03 01 93 18 42"
	},
	{
		"name": "Damon",
		"address": "Ap #576-3242 Felis Avenue",
		"mail": "libero.Proin.sed@euismodindolor.co.uk",
		"phone": "09 53 10 39 58"
	},
	{
		"name": "Elton",
		"address": "P.O. Box 706, 2637 Felis St.",
		"mail": "euismod@tortornibhsit.net",
		"phone": "01 35 35 43 78"
	},
	{
		"name": "Dillon",
		"address": "Ap #566-3005 Arcu. Av.",
		"mail": "lectus.justo.eu@Quisque.ca",
		"phone": "07 54 86 11 79"
	},
	{
		"name": "Jared",
		"address": "Ap #464-7151 Dapibus Rd.",
		"mail": "sem.egestas@ultriciesornare.edu",
		"phone": "07 84 49 11 10"
	},
	{
		"name": "Branden",
		"address": "Ap #422-3783 Nulla Ave",
		"mail": "risus.Nunc@Uttinciduntorci.ca",
		"phone": "04 87 17 29 69"
	},
	{
		"name": "Hu",
		"address": "Ap #628-2580 Donec Avenue",
		"mail": "risus.varius@luctusipsumleo.com",
		"phone": "03 77 87 44 91"
	},
	{
		"name": "Daquan",
		"address": "839-8534 Tempor Ave",
		"mail": "feugiat.tellus@egestaslacinia.co.uk",
		"phone": "04 53 40 68 99"
	},
	{
		"name": "Axel",
		"address": "5794 Arcu. St.",
		"mail": "eros.Proin@Vivamusnisi.edu",
		"phone": "03 12 79 15 59"
	},
	{
		"name": "Chandler",
		"address": "Ap #285-2949 Duis Rd.",
		"mail": "enim@Integereu.net",
		"phone": "01 83 73 76 90"
	},
	{
		"name": "Cade",
		"address": "P.O. Box 168, 5486 Vel, Avenue",
		"mail": "luctus.lobortis@rhoncusid.co.uk",
		"phone": "03 08 00 38 02"
	},
	{
		"name": "Aidan",
		"address": "800-4483 Nunc Rd.",
		"mail": "Ut@vitaesodales.co.uk",
		"phone": "07 18 86 43 70"
	},
	{
		"name": "Abdul",
		"address": "Ap #945-2188 Ac, Avenue",
		"mail": "bibendum.ullamcorper.Duis@nonummy.com",
		"phone": "01 57 03 93 27"
	},
	{
		"name": "Stone",
		"address": "158-5118 Molestie St.",
		"mail": "Nulla.interdum.Curabitur@viverra.org",
		"phone": "07 44 39 63 51"
	},
	{
		"name": "Francis",
		"address": "3468 Senectus Ave",
		"mail": "Donec.egestas@velmauris.ca",
		"phone": "08 22 32 43 40"
	},
	{
		"name": "David",
		"address": "769-4598 Id, Rd.",
		"mail": "dui@pede.org",
		"phone": "04 11 57 59 52"
	},
	{
		"name": "Daquan",
		"address": "Ap #999-8351 Nulla. Avenue",
		"mail": "Curabitur.egestas@Donecporttitortellus.com",
		"phone": "07 56 75 72 46"
	}
];
  	}
  })
  .controller('MainCtrl', function ($scope,Data) {
    $scope.data = Data.getData();
  });
