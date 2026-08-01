import AdminLayout from "../../(auth)/components/AdminLayout";

const contacts = [
  {
    name: "Samantha William",
    role: "Marketing Manager",
    email: "samantha@gmail.com",
    phone: "+1 234 567 890",
    initials: "SW",
  },
  {
    name: "Tony Soap",
    role: "Product Manager",
    email: "tonysoap@gmail.com",
    phone: "+1 234 567 891",
    initials: "TS",
  },
  {
    name: "Karen Hope",
    role: "UI/UX Designer",
    email: "karenhope@gmail.com",
    phone: "+1 234 567 892",
    initials: "KH",
  },
  {
    name: "Jordan Nico",
    role: "Developer",
    email: "jordannico@gmail.com",
    phone: "+1 234 567 893",
    initials: "JN",
  },
  {
    name: "Nadila Adja",
    role: "Project Manager",
    email: "nadilaadja@gmail.com",
    phone: "+1 234 567 894",
    initials: "NA",
  },
  {
    name: "Kevin Ard",
    role: "Web Developer",
    email: "kevinard@gmail.com",
    phone: "+1 234 567 895",
    initials: "KA",
  },
  {
    name: "Exco Libur",
    role: "Marketing Manager",
    email: "excolibur@gmail.com",
    phone: "+1 234 567 896",
    initials: "EL",
  },
  {
    name: "John Smith",
    role: "Product Designer",
    email: "johnsmith@gmail.com",
    phone: "+1 234 567 897",
    initials: "JS",
  },
  {
    name: "Alex Morgan",
    role: "Frontend Developer",
    email: "alexmorgan@gmail.com",
    phone: "+1 234 567 898",
    initials: "AM",
  },
];

export default function ContactsPage() {
  return (
    <AdminLayout>

      {/* PAGE HEADER */}

      <div className="contacts-page-header">

        <div>
          <h1>Contacts</h1>

          <p>
            Manage your contacts and team members
          </p>
        </div>

        <button className="add-contact-button">
          + Add Contact
        </button>

      </div>


      {/* CONTACT TOOLBAR */}

      <div className="contacts-toolbar">

        <div className="contacts-search">

          <span>⌕</span>

          <input
            type="text"
            placeholder="Search contacts..."
          />

        </div>


        <div className="contacts-filter">

          <button>
            All Contacts ⌄
          </button>

          <button>
            Sort By ⌄
          </button>

        </div>

      </div>


      {/* CONTACT GRID */}

      <div className="contacts-grid">

        {contacts.map((contact) => (

          <div
            className="contact-card"
            key={contact.email}
          >

            {/* MENU */}

            <button className="contact-menu">
              •••
            </button>


            {/* AVATAR */}

            <div className="contact-large-avatar">
              {contact.initials}
            </div>


            {/* NAME */}

            <h3>
              {contact.name}
            </h3>

            <span className="contact-role">
              {contact.role}
            </span>


            {/* CONTACT INFO */}

            <div className="contact-info">

              <div>
                <span>✉</span>

                <p>
                  {contact.email}
                </p>
              </div>

              <div>
                <span>☎</span>

                <p>
                  {contact.phone}
                </p>
              </div>

            </div>


            {/* ACTIONS */}

            <div className="contact-actions">

              <button>
                ✉
              </button>

              <button>
                ☎
              </button>

              <button>
                ◉
              </button>

              <button>
                ⋮
              </button>

            </div>

          </div>

        ))}

      </div>


      {/* PAGINATION */}

      <div className="contacts-pagination">

        <span>
          Showing 1-9 from 100 contacts
        </span>


        <div>

          <button>
            ‹
          </button>

          <button className="contacts-page-active">
            1
          </button>

          <button>
            2
          </button>

          <button>
            3
          </button>

          <button>
            4
          </button>

          <button>
            5
          </button>

          <button>
            ›
          </button>

        </div>

      </div>

    </AdminLayout>
  );
}