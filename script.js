//your code here
const imageClasses=["img1","img2","img3","img4","img5"];
let selectedTiles=[];

const main=document.querySelector("main");

const h3=document.createElement(h3);
h3.id="h";
h3.innerText="Please click on the identical tiles to verify that you are not a robot.";

const para =document.createElement("p");
para.id="para";

const resetBtn=document.createElement("button");
resetBtn.id="reset";
resetBtn.innerText="Reset";
resetBtn.style.display="none";

const verifyBtn=document.createElement("button");
verifyBtn.id="verify";
verifyBtn.innerText="Verify";
verifyBtn.style.display="none";

const imgContainer=document.createElement("div");
imgContainer.className="flex";

const images=[...imageClasses];
const duplicate=imageClasses[Math.floor(Math.random()*imageClasses.length)];
images.push(duplicate);
shuffle(images);

images.forEach((cls)=>{
	const img=document.createElement("img");
	img.classList.add(cls);

	img.addEventListener("click",()=>handleClick(img,cls));
	imgContainer.appendChild(img);
});

main.append(h3,imgContainer,resetBtn,verifyBtn,para);

function handleClick(img,cls) {
	if(selectedTiles.length===2) return;
	if(selectedTiles.includes(img)) returns;

	img.classList.add("selected");
	selectedTiles.push({img,cls});

	resetBtn.style.display="inline-block";

	if(selectedTiles.length===2){
		verifyBtn.style.display="inline-block";
	}
}

verifyBtn.addEventListener("click",()=>{
	verifyBtn.stlye.display="none";

	const [first,second]=selectedTiles;

	if(first.cls===second.cls){
		para.innerText="You are a human. Congratulations!";
	}else{
		para.innerText="We cant verify you as a human. You selected the non-identical tiles";
	}
});

resetBtn.addEventListener("click",()=>{
	selectedTiles.forEach((item)=>{
		item.img.classList.remove("selected");
	});

	selectedTiles=[];
	para.innerText="";
	resetBtn.style.display="none";
	verifyBtn.style.display="none";
});

function shuffle(arr){
	for(let i=arr.length-1;i>=;i--){
		const j=Math.floor(Math.random()*(i+1));
		[arr[i],arr[j]]=[arr[j],arr[i]];
	}
}