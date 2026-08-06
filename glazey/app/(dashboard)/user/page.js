import "./../../css/user.css";

export default function UserProfile() {

const messages=[
{
name:"Samantha William",
time:"12:45 PM",
msg:"Lorem ipsum dolor sit amet..."
},
{
name:"Tony Soap",
time:"12:45 PM",
msg:"Lorem ipsum dolor sit amet..."
},
{
name:"Karen Hope",
time:"12:45 PM",
msg:"Lorem ipsum dolor sit amet..."
},
{
name:"Jordan Nico",
time:"12:45 PM",
msg:"Lorem ipsum dolor sit amet..."
}
];

return(

<div className="dashboard">

{/* Sidebar */}

<aside className="sidebar">

<div className="logo">
<h2>Glazey<span>.</span></h2>
</div>

<ul className="menu">

<li className="active">Dashboard</li>
<li>Email</li>
<li>Contacts</li>
<li>Crypto</li>
<li>Kanban</li>
<li>Invoicing</li>
<li>Banking</li>
<li>Ticketing</li>
<li>File Manager</li>
<li>User</li>
<li>Calendar</li>
<li>Todo List</li>

</ul>

<div className="upgrade">

<h4>Upgrade your Account to Pro</h4>

<button>Upgrade</button>

</div>

</aside>

{/* Main */}

<div className="main">

<div className="profile-grid">

<div className="left">

{/* Profile */}

<div className="profile-card">

<div className="profile-image"></div>

<div className="profile-info">

<h2>Nadila Adja</h2>

<p>UI Designer</p>

<span>Jakarta, Indonesia</span>

<div className="contact">

<p>📞 +12 345 6789 0</p>

<p>✉ jordan@mail.com</p>

</div>

</div>

<button>Edit Profile</button>

</div>

{/* Chart */}

<div className="chart-card">

<div className="chart-header">

<h3>Pie Chart</h3>

<div>

<button className="active">
Chart
</button>

<button>
Activity
</button>

</div>

</div>

<div className="charts">

<div className="circle red">81%</div>

<div className="circle yellow">22%</div>

<div className="circle pink">62%</div>

<div className="circle blue">62%</div>

</div>

<div className="chart-footer">

<h4>Best tips increase management</h4>

<p>
Lorem ipsum dolor sit amet consectetur.
</p>

<button>
Learn More
</button>

</div>

</div>

</div>

{/* Right */}

<div className="right">

<div className="plan-card">

<h4>Your Plan</h4>

<h2>Free</h2>

<p>50 GB Storage</p>

<p>Limited Features</p>

<button>
Upgrade Plan
</button>

</div>

<div className="message-card">

<h3>Messages</h3>

<input
type="text"
placeholder="Search..."
/>

{
messages.map((item,index)=>(

<div
className="message"
key={index}
>

<div className="avatar"></div>

<div>

<h4>{item.name}</h4>

<p>{item.msg}</p>

</div>

<span>{item.time}</span>

</div>

))
}

<button className="view-btn">

View More

</button>

</div>

</div>

</div>

</div>

</div>

);

}