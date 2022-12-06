//Calendar code + scheduling events
let nav = 0;
let clicked = null;
let events = localStorage.getItem('events') ? JSON.parse(localStorage.getItem('events')) : [];

const calendar = document.getElementById('calendar');
const newEventModal = document.getElementById('newEventModal');
const deleteEventModal = document.getElementById('deleteEventModal');
const backDrop = document.getElementById('modalBackDrop');
const eventTitleInput = document.getElementById('eventTitleInput');
const weekdays = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
const eventTime = document.getElementById('eventTime');
const activated = document.getElementById('activated');



function openModal(date) {
  clicked = date;

  const eventForDay = events.find(e => e.date === clicked);

  if (eventForDay) {
    document.getElementById('eventText').innerText = eventForDay.title;
    deleteEventModal.style.display = 'block';
  } else {
    newEventModal.style.display = 'block';
  }

  backDrop.style.display = 'block';
}

function load() {
  const dt = new Date();

  if (nav !== 0) {
    dt.setMonth(new Date().getMonth() + nav);
  }

  const day = dt.getDate();
  const month = dt.getMonth();
  const year = dt.getFullYear();

  const firstDayOfMonth = new Date(year, month, 1);
  const daysInMonth = new Date(year, month + 1, 0).getDate();
  
  const dateString = firstDayOfMonth.toLocaleDateString('en-us', {
    weekday: 'long',
    year: 'numeric',
    month: 'numeric',
    day: 'numeric',
  });
  const paddingDays = weekdays.indexOf(dateString.split(', ')[0]);

  document.getElementById('monthDisplay').innerText = 
    `${dt.toLocaleDateString('en-us', { month: 'long' })} ${year}`;

  calendar.innerHTML = '';

  for(let i = 1; i <= paddingDays + daysInMonth; i++) {
    const daySquare = document.createElement('div');
    daySquare.classList.add('day');

    const dayString = `${month + 1}/${i - paddingDays}/${year}`;

    if (i > paddingDays) {
      daySquare.innerText = i - paddingDays;
      const eventForDay = events.find(e => e.date === dayString);

      if (i - paddingDays === day && nav === 0) {
        daySquare.id = 'currentDay';
      }

      if (eventForDay) {
        const eventDiv = document.createElement('div');
        eventDiv.classList.add('event');
        eventDiv.innerText = eventForDay.title;
        daySquare.appendChild(eventDiv);
      }

      daySquare.addEventListener('click', () => openModal(dayString));
    } else {
      daySquare.classList.add('padding');
    }

    calendar.appendChild(daySquare); 
    
}
}

function closeModal() {
  eventTitleInput.classList.remove('error');
  newEventModal.style.display = 'none';
  deleteEventModal.style.display = 'none';
  backDrop.style.display = 'none';
  eventTitleInput.value = '';
  clicked = null;
  load();
}


function saveEvent() {
  if (eventTitleInput.value) {
    eventTitleInput.classList.remove('error');

    events.push({
      date: clicked,
      title: eventTitleInput.value,
    }); 

    localStorage.setItem('events', JSON.stringify(events));
    console.log(events);   
    closeModal();
  } else {
    eventTitleInput.classList.add('error');
  }
}


function deleteEvent() {
  events = events.filter(e => e.date !== clicked);
  localStorage.setItem('events', JSON.stringify(events));
  closeModal();
}

function initButtons() {
  document.getElementById('nextButton').addEventListener('click', () => {
    nav++;
    load();
  });

  document.getElementById('backButton').addEventListener('click', () => {
    nav--;
    load();
  });

  document.getElementById('saveButton').addEventListener('click', saveEvent);
  document.getElementById('cancelButton').addEventListener('click', closeModal);
  document.getElementById('deleteButton').addEventListener('click', deleteEvent);
  document.getElementById('closeButton').addEventListener('click', closeModal);
}



// random quote generator
const quotes = [
  {
    text: "Genius is one percent inspiration and ninety-nine percent perspiration.",
    author: "Thomas Edison",
  },
  {
    text: "You can observe a lot just by watching.",
    author: "Yogi Berra",
  },
  {
    text: "A house divided against itself cannot stand.",
    author: "Abraham Lincoln",
  },
  {
    text: "Difficulties increase the nearer we get to the goal.",
    author: "Johann Wolfgang von Goethe",
  },
  {
    text: "Fate is in your hands and no one elses",
    author: "Byron Pulsifer",
  },
  {
    text: "Be the chief but never the lord.",
    author: "Lao Tzu",
  },
  {
    text: "Nothing happens unless first we dream.",
    author: "Carl Sandburg",
  },
  {
    text: "Well begun is half done.",
    author: "Aristotle",
  },
  {
    text: "Life is a learning experience, only if you learn.",
    author: "Yogi Berra",
  },
  {
    text: "Self-complacency is fatal to progress.",
    author: "Margaret Sangster",
  },
  {
    text: "Peace comes from within. Do not seek it without.",
    author: "Buddha",
  },
  {
    text: "What you give is what you get.",
    author: "Byron Pulsifer",
  },
  {
    text: "We can only learn to love by loving.",
    author: "Iris Murdoch",
  },
  {
    text: "Life is change. Growth is optional. Choose wisely.",
    author: "Karen Clark",
  },
  {
    text: "You'll see it when you believe it.",
    author: "Wayne Dyer",
  },
  {
    text: "Today is the tomorrow we worried about yesterday.",
    author: null,
  },
  {
    text: "It's easier to see the mistakes on someone else's paper.",
    author: null,
  },
  {
    text: "Every man dies. Not every man really lives.",
    author: null,
  },
  {
    text: "To lead people walk behind them.",
    author: "Lao Tzu",
  },
  {
    text: "Having nothing, nothing can he lose.",
    author: "William Shakespeare",
  },
  {
    text: "Trouble is only opportunity in work clothes.",
    author: "Henry J. Kaiser",
  },
  {
    text: "A rolling stone gathers no moss.",
    author: "Publilius Syrus",
  },
  {
    text: "Ideas are the beginning points of all fortunes.",
    author: "Napoleon Hill",
  },
  {
    text: "Everything in life is luck.",
    author: "Donald Trump",
  },
  {
    text: "Doing nothing is better than being busy doing nothing.",
    author: "Lao Tzu",
  },
  {
    text: "Trust yourself. You know more than you think you do.",
    author: "Benjamin Spock",
  },
  {
    text: "Study the past, if you would divine the future.",
    author: "Confucius",
  },
  {
    text: "The day is already blessed, find peace within it.",
    author: null,
  },
  {
    text: "From error to error one discovers the entire truth.",
    author: "Sigmund Freud",
  },
  {
    text: "Well done is better than well said.",
    author: "Benjamin Franklin",
  },
  {
    text: "Bite off more than you can chew, then chew it.",
    author: "Ella Williams",
  },
  {
    text: "Work out your own salvation. Do not depend on others.",
    author: "Buddha",
  },
  {
    text: "One today is worth two tomorrows.",
    author: "Benjamin Franklin",
  },
  {
    text: "Once you choose hope, anythings possible.",
    author: "Christopher Reeve",
  },
  {
    text: "God always takes the simplest way.",
    author: "Albert Einstein",
  },
  {
    text: "One fails forward toward success.",
    author: "Charles Kettering",
  },
  {
    text: "From small beginnings come great things.",
    author: null,
  },
  {
    text: "Learning is a treasure that will follow its owner everywhere",
    author: "Chinese proverb",
  },
  {
    text: "Be as you wish to seem.",
    author: "Socrates",
  },
  {
    text: "The world is always in movement.",
    author: "V. Naipaul",
  },
  {
    text: "Never mistake activity for achievement.",
    author: "John Wooden",
  },
  {
    text: "What worries you masters you.",
    author: "Haddon Robinson",
  },
  {
    text: "One faces the future with ones past.",
    author: "Pearl Buck",
  },
  {
    text: "Goals are the fuel in the furnace of achievement.",
    author: "Brian Tracy",
  },
  {
    text: "Who sows virtue reaps honour.",
    author: "Leonardo da Vinci",
  },
  {
    text: "Be kind whenever possible. It is always possible.",
    author: "Dalai Lama",
  },
  {
    text: "Talk doesn't cook rice.",
    author: "Chinese proverb",
  },
  {
    text: "He is able who thinks he is able.",
    author: "Buddha",
  },
  {
    text: "A goal without a plan is just a wish.",
    author: "Larry Elder",
  },
  {
    text: "To succeed, we must first believe that we can.",
    author: "Michael Korda",
  },
  {
    text: "Learn from yesterday, live for today, hope for tomorrow.",
    author: "Albert Einstein",
  },
  {
    text: "A weed is no more than a flower in disguise.",
    author: "James Lowell",
  },
  {
    text: "Do, or do not. There is no try.",
    author: "Yoda",
  },
  {
    text: "All serious daring starts from within.",
    author: "Harriet Beecher Stowe",
  },
  {
    text: "The best teacher is experience learned from failures.",
    author: "Byron Pulsifer",
  }]
let quoteText = null,
  quoteAuthor = null;

getQuote();

function getQuote() {
  const rndIdx = Math.floor(Math.random() * quotes.length);
  quoteText = quotes[rndIdx].text;
  quoteAuthor = (quotes[rndIdx].author)? quotes[rndIdx].author : "Unknown Author";
  displayQuote(quoteText, quoteAuthor);
}

function displayQuote(quote, author) {
  if (quote !== null) {
    const textParagraph = document.querySelector(".quote");
    textParagraph.innerHTML = `"${quote}" &mdash; <strong>${author}</strong>`;
  }
}



// rest list button + uncheck button
initButtons();
load();
let resetButton = document.getElementById('resetList');
let inputs = document.querySelectorAll('input');
resetButton.addEventListener('click', () => {
    inputs.forEach(input =>  input.value = '');
});


function CheckUncheck(main) {
  allCheckbuttons = document.getElementsByClassName('checked');
  for(var x=0; x<allCheckbuttons.length; x++) {
    allCheckbuttons[x].checked = main.checked;
  }
}

// pomodoro timer with sounds
/* CHANGE TABS */

const clock = document.getElementsByClassName('clockbox');
const sound = document.getElementsByClassName('sound');

displayPage(clock);

function displayPage(page){
    page[0].style.display = 'flex';
}

const btnclock1 = document.getElementById('goclock1');
const btnclock2 = document.getElementById('goclock2');
const btnsound1 = document.getElementById('gosd1');
const btnsound2 = document.getElementById('gosd2');

btnclock1.addEventListener('click', function(){
    displayPage(clock)
    sound[0].style.display = 'none';
});
btnclock2.addEventListener('click', function(){
    displayPage(clock)
    sound[0].style.display = 'none';
});


btnsound1.addEventListener('click', function(){
    displayPage(sound)
    clock[0].style.display = 'none';
});
btnsound2.addEventListener('click', function(){
    displayPage(sound)
    clock[0].style.display = 'none';
});



/* COUNTDOWN TIMERS */
let end = false;
function startTimer(duration, display, state) {
    let timer = duration, minutes, seconds;
    setInterval(function () {
        if(!state) {
            document.getElementById('alarm').src = "";
            document.getElementById('sb').addEventListener('click', function (){
                timer = (60 * 5), minutes, seconds;
            })
            document.getElementById('lb').addEventListener('click', function (){
                timer = (60 * 15), minutes, seconds;
            })

            document.getElementById('pause').addEventListener('click', function (){
                state = true;
                document.getElementById('image').src = "reload.png";
                document.getElementById('continue').style.display = 'block'
                document.getElementById('play').style.display = 'block'
                document.getElementById('pause').style.display = 'none'
                document.getElementById('play').style.margin = "13.5rem 0 0 4.5rem"
            })
            document.getElementById('continue').addEventListener('click', function (){
                state = false;
                document.getElementById('play').style.display = 'none'
                document.getElementById('continue').style.display = 'none'
                document.getElementById('pause').style.display = 'block'
            })
            minutes = parseInt(timer / 60, 10);
            seconds = parseInt(timer % 60, 10);

            minutes = minutes < 10 ? "0" + minutes : minutes;
            seconds = seconds < 10 ? "0" + seconds : seconds;
            display.textContent = minutes + ":" + seconds;

            if (--timer < 0) {
                state = true;
                document.getElementById('image').src = "reload.png";
                document.getElementById('play').style.display = 'block'
                document.getElementById('pause').style.display = 'none'
                document.getElementById('alarm').src = "sound/alarm.wav";
            }
        }
    }, 1000);
}

let state = false;
document.getElementById('play').addEventListener('click', function (){
    state = false;
    let countMinutes = 60 * 25,
        display = document.querySelector('#time');
    startTimer(countMinutes, display, state);
    document.getElementById('continue').style.display = 'none'
    document.getElementById('play').style.display = 'none'
    document.getElementById('pause').style.display = 'block'
})

/* SOUND */

document.getElementById('rain').addEventListener('click', function (){
    document.getElementById('audio').src = "rain.mp3";
})
document.getElementById('piano').addEventListener('click', function (){
    document.getElementById('audio').src = "piano.mp3";
})
document.getElementById('waves').addEventListener('click', function (){
    document.getElementById('audio').src = "waves.mp3";
})
document.getElementById('harp').addEventListener('click', function (){
    document.getElementById('audio').src = "harp.mp3";
})
document.getElementById('birds').addEventListener('click', function (){
    document.getElementById('audio').src = "birds.mp3";
})
document.getElementById('none').addEventListener('click', function (){
    document.getElementById('audio').src = "";
})


// Observer

function Subject()
{
  this.observers = [] //array of the observers fct
}

Subject.prototype = {
  subscribe: function(fn)  //the observer function(ex: i want to subscribe to this obj so whenever this object has a signal, i want to know about it); add me to your array of observers

  {
    this.observers.push(fn)  
  },

  unsubscribe: function(fnToRemove)  //idw to receive news from you so needs to be out of the array of the observers fct

  {
    this.observers = this.observers.filter( fn => {  //here we're removing-->filter elements from the observers array and return a new filtered array(if call back is true, element should be                                                        included in the new array(not filtered)

      if(fn != fnToRemove)
        return fn
    })
  },
  fire: function() //fct to notify every observer currently subscribed to this subject
  {
    this.observers.forEach( fn => {
      fn.call()
    })
  }
}
const schedule = require('node-schedule')
schedule.scheduleJob('0 2 * * *', () => {
  if(permission === "granted"){
    const notification  = new Notification("Reminder: ", {
        body: "Check your calendar for today's events!"
    })
}
})
Notification.requestPermission()
setInterval(notifyMorning, 15464000);
 //send welcome message when app is open
function notifyMorning() {
    if(permission === "granted"){
      const notification  = new Notification("Welcome back! ", {
          body: "Check your calendar for today's schedule!"})
  }
}


