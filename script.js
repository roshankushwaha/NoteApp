const allBtn = document.querySelector('.all-container');
const homeBtn = document.querySelector('.home-container');
const workBtn = document.querySelector('.work-container');
const personalBtn = document.querySelector('.personal-container');

const addNewBtn = document.querySelector('.add-note');


const toggle = (btn) =>{
    allBtn.style.backgroundColor = null;
    homeBtn.style.backgroundColor = null;
    workBtn.style.backgroundColor = null;
    personalBtn.style.backgroundColor = null;

    allBtn.firstElementChild.style.color = '#949494';
    homeBtn.firstElementChild.style.color = '#949494';
    workBtn.firstElementChild.style.color = '#949494';
    personalBtn.firstElementChild.style.color = '#949494';

    if(btn == allBtn){
        btn.style.backgroundColor ='#68bcff';
        btn.firstElementChild.style.color = 'white';
        location.reload();
    }
    else if( btn == homeBtn){
        btn.style.backgroundColor ='#fe9202';
        btn.firstElementChild.style.color = 'white';
    }
    else if(btn == workBtn){
        btn.style.backgroundColor ='#5c6ac0';
        btn.firstElementChild.style.color = 'white';
    }
    else if(btn == personalBtn){
        btn.style.backgroundColor ='#66ba69';
        btn.firstElementChild.style.color = 'white';
    }
    
}

allBtn.addEventListener('click',() => toggle(allBtn) );
homeBtn.addEventListener('click',() => {toggle(homeBtn); cardMapFun('home');} );
workBtn.addEventListener('click',() => {toggle(workBtn); cardMapFun('work');} );
personalBtn.addEventListener('click',() =>{ toggle(personalBtn);cardMapFun('personal');} );

// 
const setToggle = (toggle) => {
document.querySelector('.add-new-container').style.display = toggle ? 'flex': 'none';
}

addNewBtn.addEventListener('click',() => setToggle(true) );

const addNewContainer = document.querySelector('.add-new-container');
addNewContainer.addEventListener('click', (event) => {
    if(event.target.className == 'add-new-container'){
        setToggle(false);
    }
})
// adding event on Buttons
document.querySelector('.cancel').addEventListener('click', () => setToggle(false));
document.querySelector('.add').addEventListener('click', () => {
    setToggle(false);
    window.location.reload();
});

// select category options
function setCategoryToggle(toggle){
    document.querySelector('.category-options').style.display = toggle ? 'block': 'none';
}
const category = document.querySelector('.select-category');
category.addEventListener('click', () => setCategoryToggle(true));

 const optionContainer = document.querySelector('.category-options');
 optionContainer.addEventListener('click', (event) => {
    if(event.target.className == 'category-home'){
        document.querySelector('.selected-category').innerText = 'home';
        setCategoryToggle(false);
    }
    else if(event.target.className == 'category-work'){
        document.querySelector('.selected-category').innerText = 'work';
        setCategoryToggle(false);
    }
    else if(event.target.className == 'category-personal'){
        document.querySelector('.selected-category').innerText = 'personal';
        setCategoryToggle(false);
    }
   
 });

const allNotes = [
    {
      "id": 1,
      "title": "Task Title 1",
      "description": "This is the description for task 1",
      "category": "home",
      "date":"Jan 20, 2023"
    },
    {
      "id": 2,
      "title": "Task Title 2",
      "description": "This is the description for task 2",
      "category": "work",
      "date":"Jan 20, 2023"
    },
    {
      "id": 3,
      "title": "Task Title 3",
      "description": "This is the description for task 3",
      "category": "personal",
      "date":"Jan 20, 2023"
    },
    {
      "id": 4,
      "title": "Task Title 4",
      "description": "This is the description for task 4",
      "category": "work",
      "date":"Jan 20, 2023"
    },
  ]

  
const cardContainer = document.querySelector('.card-container');
const cardMapFun = (type) => {
    cardContainer.innerHTML = "";
    allNotes.map( (note) => {
        const card = document.createElement('div');
        card.classList.add('card');
        if(note.category == 'home'){
            card.style.background = '#fe9202';
        }
        else if(note.category == 'work'){
            card.style.background = '#5c6ac0';
        }
        else if(note.category == 'personal'){
            card.style.background = '#66ba69';
        }
        if(type == 'all'){
        card.innerHTML = `<div class="card-header">
                            <div class="ckeckbox-title-container">
                                <input id = '${note.id}'class="complete-checkbox" type="checkbox" class="completed"/>
                                <p class="card-title"> ${note.title}</p>
                            </div>
                            <div class="delete-edit-container">
                                <img class="edit-icon" src="./Assets/editIcon.png" height="20px" width="20px"/>
                                <img class="delete-icon" src="./Assets/deleteIcon.png" height="20px" width="20px"/>
                            </div>
                        </div>
                        <span class="card-description">${note.description}</span>
                        <div class="note-date-container">
                            <p class="note-date">${note.date}</p>
                        </div>`;
                        cardContainer.append(card);
        }
        else if(type == note.category){
            card.innerHTML = `<div class="card-header">
                            <div class="ckeckbox-title-container">
                                <input id = '${note.id}' class="complete-checkbox" type="checkbox" class="completed"/>
                                <p class="card-title"> ${note.title}</p>
                            </div>
                            <div class="delete-edit-container">
                                <img class="edit-icon" src="./Assets/editIcon.png" height="20px" width="20px"/>
                                <img class="delete-icon" src="./Assets/deleteIcon.png" height="20px" width="20px"/>
                            </div>
                        </div>
                        <span class="card-description">${note.description}</span>
                        <div class="note-date-container">
                            <p class="note-date">${note.date}</p>
                        </div>`;
                        cardContainer.append(card);
        }
    })
}
cardMapFun('all');


// card Complete logic here

cardContainer.addEventListener('click', (event) => {
    if(event.target.tagName === 'INPUT'){
        const checkbox = event.target;
        const container = checkbox.closest('.card-header');
        
        if(container){
            container.querySelector('.card-title').style.textDecoration = 'line-through';
            container.parentElement.querySelector('.card-description').style.textDecoration = 'line-through';
            container.parentElement.querySelector('.note-date').style.textDecoration = 'line-through';
            
        }
    }
});