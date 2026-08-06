import "./../../css/file-maneger.css";

export default function FileManager() {

const files=[
{
name:"Scenery.jpg",
date:"December 27th, 2021 04:56 AM",
size:"1.0 MB"
},
{
name:"Video.mp4",
date:"December 27th, 2021 04:56 AM",
size:"25.0 MB"
},
{
name:"Music.mp3",
date:"December 27th, 2021 04:56 AM",
size:"21.0 MB"
},
{
name:"Document.doc",
date:"December 27th, 2021 04:56 AM",
size:"10.0 MB"
},
{
name:"Project 01",
date:"December 27th, 2021 04:56 AM",
size:"10.0 MB"
},
{
name:"Project 02",
date:"December 27th, 2021 04:56 AM",
size:"10.0 MB"
}
];

return(

<div className="file-dashboard">

<div className="main-content">

<h2 className="page-title">
File Manager
</h2>

{/* Storage */}

<div className="storage-grid">

<div className="storage-card">
<div className="circle red">80%</div>
<div>
<p>Storage</p>
<h4>Google Drive</h4>
<h5>40 GB / 50 GB</h5>
</div>
</div>

<div className="storage-card">
<div className="circle yellow">80%</div>
<div>
<p>Storage</p>
<h4>Google Drive</h4>
<h5>40 GB / 50 GB</h5>
</div>
</div>

<div className="storage-card">
<div className="circle purple">80%</div>
<div>
<p>Storage</p>
<h4>Google Drive</h4>
<h5>40 GB / 50 GB</h5>
</div>
</div>

<div className="storage-card">
<div className="circle blue">80%</div>
<div>
<p>Storage</p>
<h4>Google Drive</h4>
<h5>40 GB / 50 GB</h5>
</div>
</div>

</div>

<div className="file-layout">

{/* Left */}

<div className="left-panel">

<button className="upload-btn">
+ Upload
</button>

<h4>Menu</h4>

<ul>

<li>All File</li>
<li>Images</li>
<li>Videos</li>
<li>Music</li>
<li>Documents</li>

</ul>

<h4>Quick Access</h4>

<ul>

<li>Project 01</li>
<li>Project 02</li>

</ul>

</div>

{/* Right */}

<div className="right-panel">

<div className="top-bar">

<h3>Recent Files</h3>

<input
type="text"
placeholder="Search here..."
/>

</div>

<table>

<thead>

<tr>

<th>File Name</th>
<th>Date</th>
<th>File Size</th>

</tr>

</thead>

<tbody>

{
files.map((item,index)=>(

<tr key={index}>

<td>{item.name}</td>

<td>{item.date}</td>

<td>{item.size}</td>

</tr>

))
}

</tbody>

</table>

</div>

</div>

</div>

</div>

);

}