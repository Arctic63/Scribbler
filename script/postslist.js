let warning_popUp = document.getElementById("warning");

const deletePopUp = () => {
  warning_popUp.style.display = "flex";
};
const closeWarning = () => {
  warning_popUp.style.display = "none";
};

// `<div id="post-card-6" class="post-card">
//     <div id="card-left-container-1" class="card-left">
//       <span class="color-span"><i class="fa-solid fa-user"></i></span>
//       <p class="vertical-text">Srishti Gupta</p>
//       <hr/>
//     </div>

//     <div id="card-right-container-1" class="card-right">
//       <div class="content-title-div">
//         <p class="title" id="title-1">
//           ‘let’ me be a ‘const’(ant), not a ‘var’(iable)!
//         </p>
//         <hr />
//       </div>

//       <div class="content">
//         <p>
//           Since JavaScript does not have any type-checking, either of
//           these keywords can be used to declare a variable of any type
//           (datatype) in JavaScript. Though all the three keywords are used
//           for the same purpose, they are different.
//         </p>
//       </div>
//     </div>

//     <div class="icon-trash-ellipsis">
//       <i class="fa-solid fa-trash" onclick="deletePopUp()"></i>
//       <a href="/html/post.html"><i class="fa-solid fa-ellipsis"></i></a>
//     </div>
//   </div> `


addEventListener('load', () => {
  console.log(localStorage.getItem('title'));
  const title = localStorage.getItem('title') || '';
  const content = localStorage.getItem('content') || '';
  // const description = localStorage.getItem('description') || 'x';
  // console.log(description);

  if (title && content) {
    console.log(title, content);
    renderContent(title, content);
  }
})

const manip = document.getElementById('')

const renderContent = (title, content) => {
  console.log(title, content);
  const data = document.getElementById('post-container');
  data.innerHTML += `<div id="post-card-6" class="post-card">
    <div id="card-left-container-1" class="card-left">
      <span class="color-span"><i class="fa-solid fa-user"></i></span>
      <p class="vertical-text">Srishti Gupta</p>
      <hr/>
    </div>

    <div id="card-right-container-1" class="card-right">
      <div class="content-title-div">
        <p class="title" id="title-1">
          ${title}
        </p>
        <hr/>
      </div>

      <div class="content">
        <p>
          ${content}
        </p>
      </div>
    </div>

    <div class="icon-trash-ellipsis">
      <i class="fa-solid fa-trash" onclick="deletePopUp()"></i>
      <a href="/html/post.html"><i class="fa-solid fa-ellipsis"></i></a>
    </div>
  </div> `
}

