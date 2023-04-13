//Chatbot buatan Daffa Ahmad Ibrahim Umur 15 Tahun, 11-04-2023
//Github https://github.com/Daffabot
//Web https://www.daffabot.my.id

var trigger = [
   	["assalamualaikum", "assalamualaikum wr wb.", "assalamualaikum warahmatullahi wabarakatuh"],
	["hi","halo","hey","hai","hello"],
	["p","peh"],
	["how are you", "how is life", "how are things"],
	["bagaimana kabar kamu","bagaimana kabar mu","bagaimana kabarmu"],
	["what are you doing", "what is going on"],
	["apa yang sedang kamu lakukan","apa yang kamu lakukan","kamu sedang apa","sekarang kamu lagi apa","lagi ngapain","kamu lagi apa","kamu lagi ngapain","ngapain aja kamu"],
	["how old are you"],
	["berapa umur kamu","berapa umurmu","berapa usia kamu","berapa usiamu","sekarang kamu umurnya berapa","umur kamu berapa"],
	["who are you", "are you human", "are you bot", "are you human or bot"],
        ["siapa kamu","siapa dirimu","siapa ini","kamu siapa","apa kamu manusia","apakah kamu manusia","kamu manusia atau robot","kamu itu siapa","apakah kamu robot","kamu robot","apa kamu robot"],
	["who created you", "who made you"],
        ["siapa yang menciptakan kamu","siapa yang menciptakanmu","siapa penciptamu","yang menciptakanmu siapa","kamu diciptakan siapa","kamu dibuat siapa","kamu diciptakan oleh siapa","kamu dibuat oleh siapa","siapa yang membuatmu","kamu dibuat oleh siapa"],
	["your name please",  "your name", "may i know your name", "what is your name"],
        ["nama kamu siapa", "namamu siapa","bolehkah aku mengetahui nama kamu","siapa namamu","siapa nama kamu"],
	["i love you"],
        ["aku mencintaimu", "aku mencintai kamu", "aku cinta kamu", "aku menyukaimu", "aku menyukai kamu"],
	["happy", "good"],
        ["baik", "senang"],
	["bad", "bored", "tired"],
	["help me", "tell me story", "tell me joke"],
	["ah", "yes", "ok", "okay", "nice", "thanks", "thank you"],
	["anjay"],
	["bye", "good bye", "goodbye", "see you later"],
        ["buruk", "bosan", "lelah"],
        ["tolong saya", "ceritakan cerita", "ceritakan lelucon"],
        ["ya", "oke", "bagus", "terima kasih"],
        ["selamat tinggal", "sampai jumpa"]
];
var reply = [
	["Wa alaikumsalam", "Wa alaikumsalam warohmatullohi wabarokatuh"],
	["Hi","Halo","Hai","Hey","Hello"],
	["Ada apa anak dajjal?","p = atheis","Salam dulu kek, kayak gak pernah diajarin aja"],
	["Fine", "Pretty well", "Fantastic"],
	["Alhamdulillah sehat","Aku baik-baik saja, bagaimana denganmu?"],
	["Nothing much", "About to go to sleep", "Can you guest?", "I don't know actually"],
	["Lagi tidur","Nggak tau aku juga","Sedang menunggu jawabanmu","Mau tau banget atau mau tau doang?"], 
	["I am 1 day old"],
	["Umurku baru 1 hari, karena baru diciptakan oleh Masterku"],
	["I am just a bot", "I am a bot. What are you?"],
        ["Aku hanyalah robot","aku hanyalah alat oleh Masterku"],
	["Daffa Ahmad Ibrahim", "My Master"],
        ["Oleh Daffa Ahmad Ibrahim", "Oleh Masterku"],
	["I am nameless", "I don't have a name"],
        ["Aku belum mempunyai nama resmi", "Aku belum dikasih nama sama Masterku, hiks :'( "],
	["I love you too", "Me too"],
        ["Aku juga mencintaimu sayang", "Aku juga menyukaimu"],
	["Have you ever felt bad?", "Glad to hear it"],
        ["Apakah Kamu pernah merasa tidak enak?", "Senang mendengarnya"],
	["Why?", "Why? You shouldn't!", "Try watching TV"],
	["I will", "What about?"],
	["Tell me a story", "Tell me a joke", "Tell me about yourself", "You are welcome"],
	["Apaan dih"],
	["Bye", "Goodbye", "See you later"],      
        ["Mengapa?", "Mengapa? Seharusnya tidak!", "Cobalah menonton TV"],
        ["Ya, saya akan lakukan", "Bagaimana dengan itu?"],
        ["Ceritakan sebuah cerita", "Ceritakan lelucon", "Ceritakan tentang dirimu", "Sama-sama"],
        ["Sampai jumpa", "Selamat tinggal", "Sampai jumpa lagi"]
];
var alternative = ["Haha...", "Eh..."];
  document.querySelector("#submit").addEventListener("click", function(e) {
    var input = document.getElementById("input").value;
		addChatbot()
		setTimeout(function() {
          output(input);
		  document.getElementById("user").innerHTML = input;
        }, 500);
  });
document.querySelector("#input").addEventListener("keypress", function(e){
	var key = e.which || e.keyCode;
	if(key === 13){ //Enter button
		var input = document.getElementById("input").value;
		addChatbot()
		setTimeout(function() {
          output(input);
		  document.getElementById("user").innerHTML = input;
		  down();
        }, 500);
	}
});

const mainDiv = document.getElementById("main");
let count = 0;

      function addChatbot() {
  count++;
  const userDiv = document.createElement("div");
  userDiv.id = "user";
  userDiv.style.overflow = "auto";
  userDiv.style.margin = "4px";
  userDiv.style.border = "2px solid black";
  userDiv.style.borderRadius = "8px";
  userDiv.style.display = "inline-block";
  userDiv.style.textAlign = "left";
  userDiv.style.marginLeft = "36px";
  userDiv.style.borderColor = "blue";
  userDiv.style.backgroundColor = "blue";
  userDiv.style.fontWeight = "600";
  userDiv.style.float = "right";
  userDiv.style.borderBottomRightRadius = "0px";
  userDiv.style.maxWidth = "90%";
  userDiv.innerHTML = "<span>" + "</span>";
  mainDiv.appendChild(userDiv);
  setTimeout(function() {
          userDiv.id = "user" + count;
        }, 1000);
		
	const br1 = document.createElement("br");
	mainDiv.appendChild(br1);
	
	const br2 = document.createElement("br");
	mainDiv.appendChild(br2);

  const chatbotDiv = document.createElement("div");
  chatbotDiv.id = "chatbot";
  chatbotDiv.style.overflow = "auto";
  chatbotDiv.style.margin = "4px";
  chatbotDiv.style.border = "2px solid black";
  chatbotDiv.style.borderRadius = "8px";
  chatbotDiv.style.display = "inline-block";
  chatbotDiv.style.textAlign = "left";
  chatbotDiv.style.marginRight = "36px";
  chatbotDiv.style.borderColor = "green";
  chatbotDiv.style.backgroundColor = "green";
  chatbotDiv.style.fontWeight = "600";
  chatbotDiv.style.float = "left";
  chatbotDiv.style.borderBottomLeftRadius = "0px";
  chatbotDiv.style.maxWidth = "90%";
  chatbotDiv.innerHTML = "<span>" + "</span>";
  mainDiv.appendChild(chatbotDiv);
  setTimeout(function() {
          chatbotDiv.id = "chatbot" + count;
        }, 1500);
		
	const br3 = document.createElement("br");
	mainDiv.appendChild(br3);
	
	const br4 = document.createElement("br");
	mainDiv.appendChild(br4);
      }

function output(input){
	try{
		var product = input + "=" + eval(input);
	} catch(e){
		var text = (input.toLowerCase()).replace(/[^\w\s\d]/gi, ""); //remove all chars except words, space and 
		text = text.replace(/ a /g, " ").replace(/i feel /g, "").replace(/whats/g, "what is").replace(/please /g, "").replace(/ please/g, "");
		if(compare(trigger, reply, text)){
			var product = compare(trigger, reply, text);
		} else {
			var product = alternative[Math.floor(Math.random()*alternative.length)];
		}
	}
	setTimeout(function() {
          	document.getElementById("chatbot").innerHTML = product;
        }, 500);
	speak(product);
	document.getElementById("input").value = ""; //clear input value
}
function compare(arr, array, string){
	var item;
	for(var x=0; x<arr.length; x++){
		for(var y=0; y<array.length; y++){
			if(arr[x][y] == string){
				items = array[x];
				item =  items[Math.floor(Math.random()*items.length)];
			}
		}
	}
	return item;
}
function speak(string){
	var utterance = new SpeechSynthesisUtterance();
	utterance.voice = speechSynthesis.getVoices().filter(function(voice){return voice.name == "Agnes";})[0];
	utterance.text = string;
	utterance.lang = "in_ID";
	utterance.volume = 1; //0-1 interval
	utterance.rate = 0.8;
	utterance.pitch = 1; //0-2 interval
	speechSynthesis.speak(utterance);
}
function down() {
  var elem = document.getElementById('chat-box');
  elem.scrollTop = elem.scrollHeight;
}