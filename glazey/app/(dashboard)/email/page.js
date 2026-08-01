import AdminLayout from "../../(auth)/components/AdminLayout";

const emails = [
  {
    id: 1,
    name: "ravi@gmail.com",
    time: "24 min ago",
    subject: "How to manage your working time in this pandemic",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    checked: false,
    starred: true,
  },
  {
    id: 2,
    name: "sumit@gmail.com",
    time: "24 min ago",
    subject: "How to manage your working time in this pandemic",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    checked: true,
    starred: false,
  },
  {
    id: 3,
    name: "aryan@gmail.com",
    time: "24 min ago",
    subject: "How to manage your working time in this pandemic",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    checked: false,
    starred: true,
  },
  {
    id: 4,
    name: "vishu@gmail.com",
    time: "24 min ago",
    subject: "How to manage your working time in this pandemic",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    checked: true,
    starred: false,
  },
  {
    id: 5,
    name: "hasib@gmail.com",
    time: "24 min ago",
    subject: "How to manage your working time in this pandemic",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    checked: false,
    starred: true,
  },
];

const folders = [
  {
    name: "Inbox",
    icon: "▣",
    count: "2",
    active: true,
  },
  {
    name: "Sent",
    icon: "➤",
  },
  {
    name: "Favorite",
    icon: "☆",
  },
  {
    name: "Draft",
    icon: "▱",
  },
  {
    name: "Important",
    icon: "◉",
  },
  {
    name: "Scheduled",
    icon: "◷",
  },
  {
    name: "More",
    icon: "⌄",
  },
];

export default function EmailPage() {
  return (
    <AdminLayout>

      {/* Page Header */}

      <div className="email-page-header">

        <h1>Email</h1>

      </div>


      {/* Email Layout */}

      <div className="email-layout">

        {/* LEFT EMAIL SIDEBAR */}

        <aside className="email-sidebar">

          <button className="compose-button">
            Compose Email
          </button>


          {/* Folders */}

          <div className="email-folders">

            {folders.map((folder) => (

              <div
                key={folder.name}
                className={`email-folder ${
                  folder.active
                    ? "email-folder-active"
                    : ""
                }`}
              >

                <span className="email-folder-icon">
                  {folder.icon}
                </span>

                <span>
                  {folder.name}
                </span>

                {folder.count && (
                  <b>
                    {folder.count}
                  </b>
                )}

              </div>

            ))}

          </div>


          {/* Categories */}

          <div className="email-category-section">

            <h4>
              Categories
            </h4>

            <div className="email-category">

              <span className="category-work">
                ◇
              </span>

              Work

            </div>

            <div className="email-category">

              <span className="category-side">
                ◇
              </span>

              Side Project

            </div>

          </div>


          {/* Tags */}

          <div className="email-tags-section">

            <h4>
              Tags
            </h4>

            <div className="email-tags">

              <span>
                #projectmanagement
              </span>

              <span>
                #teamwork
              </span>

              <span>
                #design
              </span>

              <span>
                #weeklymeeting
              </span>

            </div>

          </div>

        </aside>


        {/* EMAIL CONTENT */}

        <section className="email-content">

          {/* Email Toolbar */}

          <div className="email-toolbar">

            <div className="email-tabs">

              <button className="email-tab-active">
                □
              </button>

              <button>
                ▣ Important
              </button>

              <button>
                ▧ Socials
              </button>

              <button>
                ▤ Promotion
              </button>

            </div>


            <div className="email-actions">

              <button>
                ▱
              </button>

              <button>
                ↶
              </button>

              <button>
                ◉
              </button>

              <button>
                ♙
              </button>

              <button>
                •••
              </button>

            </div>

          </div>


          {/* Email List */}

          <div className="email-list">

            {emails.map((email) => (

              <div
                className="email-row"
                key={email.id}
              >

                {/* Checkbox */}

                <div className="email-checkbox">

                  <span
                    className={
                      email.checked
                        ? "checked"
                        : ""
                    }
                  >
                    {email.checked
                      ? "✓"
                      : ""}
                  </span>

                </div>


                {/* Star */}

                <div
                  className={`email-star ${
                    email.starred
                      ? "star-active"
                      : ""
                  }`}
                >
                  ★
                </div>


                {/* Avatar */}

                <div className="email-avatar">
                  K
                </div>


                {/* Email Details */}

                <div className="email-details">

                  <div className="email-meta">

                    <span>
                      {email.name}
                    </span>

                    <small>
                      {email.time}
                    </small>

                  </div>


                  <h3>
                    {email.subject}
                  </h3>


                  <p>
                    {email.text}
                  </p>


                  <div className="email-labels">

                    <span>
                      ♧ Master_File
                    </span>

                    <span>
                      ▣ CoverPreview
                    </span>

                    <span>
                      4 files more
                    </span>

                  </div>

                </div>


                {/* Email Actions */}

                <div className="email-row-actions">

                  <button>
                    ▣
                  </button>

                  <button>
                    ◉
                  </button>

                  <button>
                    ♧
                  </button>

                  <button>
                    •••
                  </button>

                </div>

              </div>

            ))}

          </div>


          {/* Pagination */}

          <div className="email-pagination">

            <span>
              Showing 1-5 from 100 data
            </span>

            <div>

              <button>
                ‹
              </button>

              <button>
                1
              </button>

              <button className="pagination-active">
                2
              </button>

              <button>
                3
              </button>
              
              <button>
                ›
              </button>

            </div>

          </div>

        </section>

      </div>

    </AdminLayout>
  );
}