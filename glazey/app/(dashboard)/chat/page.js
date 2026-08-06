import "./../../css/chat.css";

export default function ChatPage() {

const chats = [
{
name:"Product Design Team (32)",
msg:"Lorem ipsum dolor sit amet...",
time:"12:45 PM"
},
{
name:"Best Friend (4)",
msg:"Lorem ipsum dolor sit amet...",
time:"12:45 PM"
},
{
name:"Design Community (100+)",
msg:"Lorem ipsum dolor sit amet...",
time:"12:45 PM"
}
];

const users = [
{
name:"Samantha William",
time:"12:45 PM"
},
{
name:"Tony Soap",
time:"12:45 PM"
},
{
name:"Karen Hope",
time:"12:45 PM"
}
];

return(

<div className="dashboard">

{/* Sidebar */}

<div className="sidebar">

<h2 className="logo">
Glazey<span>.</span>
</h2>

<ul>

<li className="active">Dashboard</li>
<li>Email</li>
<li>Contacts</li>
<li>Crypto</li>
<li>Kanban</li>
<li>Invoice</li>
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

</div>

{/* Main */}

<div className="main">

<div className="topbar">

<h2>Chat</h2>

<div className="search">

<input
type="text"
placeholder="Search here..."
/>

</div>

</div>

<div className="chat-layout">

{/* LEFT PANEL */}

<div className="chat-sidebar">

<div className="chat-search">

<input
type="text"
placeholder="Search..."
/>

</div>

<h4>Contacts</h4>

<div className="contact-row">

<div className="avatar"></div>
<div className="avatar"></div>
<div className="avatar"></div>
<div className="avatar"></div>
<div className="avatar"></div>
<div className="avatar"></div>

</div>

<h4>Groups</h4>

{
chats.map((item,index)=>(

<div
className="group-card"
key={index}
>

<div className="avatar"></div>

<div>

<h5>{item.name}</h5>

<p>{item.msg}</p>

</div>

<span>{item.time}</span>

</div>

))
}

<h4>Chats</h4>

{
users.map((item,index)=>(

<div
className="group-card"
key={index}
>

<div className="avatar"></div>

<div>

<h5>{item.name}</h5>

<p>Lorem ipsum dolor sit amet...</p>

</div>

<span>{item.time}</span>

</div>

))
}

<button className="view-btn">

View More

</button>

</div>

{/* RIGHT PANEL */}

<div className="chat-box">

<div className="chat-header">

<div className="avatar"></div>

<div>

<h3>Product Design Team</h3>

<p>32 Members, 12 Online</p>

</div>

</div>

<div className="messages">

<div className="left-msg">

<p>Hello Natasha!</p>

</div>

<div className="left-msg light">

<p>Can you arrange schedule for next meeting?</p>

</div>

<div className="right-msg">

<p>Hello Jordan!</p>

</div>

<div className="right-msg orange">

<p>Okay, I'll arrange it soon.</p>

</div>

</div>

<div className="message-box">

<input
type="text"
placeholder="Write your message..."
/>

<button>

Send

</button>

</div>

</div>

</div>

</div>

</div>

);

}