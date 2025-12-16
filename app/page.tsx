'use client'

import { useState } from 'react'
import Link from 'next/link'

export default function Home() {
  return (
    <>
      <header className="header">
        <div className="container">
          <div className="header-content">
            <div className="logo">ProjectHub</div>
            <nav className="nav">
              <Link href="/">Home</Link>
              <Link href="#features">Features</Link>
              <Link href="#projects">Projects</Link>
              <Link href="#team">Team</Link>
            </nav>
          </div>
        </div>
      </header>

      <main className="main">
        <div className="container">
          <section className="hero">
            <h1>Project Management & Development Platform</h1>
            <p>Streamline your workflow, collaborate with your team, and ship faster</p>
            <button className="btn" onClick={() => {
              document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })
            }}>
              Get Started
            </button>
          </section>

          <section id="features">
            <div className="grid">
              <div className="card">
                <h3>Task Management</h3>
                <p>Organize tasks with kanban boards, lists, and custom workflows. Track progress in real-time with powerful filtering and sorting.</p>
              </div>
              <div className="card">
                <h3>Team Collaboration</h3>
                <p>Work together seamlessly with built-in chat, file sharing, and real-time updates. Keep everyone on the same page.</p>
              </div>
              <div className="card">
                <h3>Sprint Planning</h3>
                <p>Plan and execute sprints with agile methodologies. Set goals, track velocity, and iterate quickly.</p>
              </div>
              <div className="card">
                <h3>Code Integration</h3>
                <p>Connect with GitHub, GitLab, and Bitbucket. Track commits, pull requests, and deployments in one place.</p>
              </div>
              <div className="card">
                <h3>Analytics & Reports</h3>
                <p>Gain insights with detailed analytics. Track team performance, project health, and identify bottlenecks.</p>
              </div>
              <div className="card">
                <h3>Time Tracking</h3>
                <p>Monitor time spent on tasks and projects. Generate accurate timesheets and improve estimation accuracy.</p>
              </div>
            </div>
          </section>

          <section id="projects" style={{ marginTop: '60px' }}>
            <h2 style={{ fontSize: '36px', marginBottom: '30px', textAlign: 'center' }}>Active Projects Dashboard</h2>
            <ProjectDashboard />
          </section>
        </div>
      </main>
    </>
  )
}

function ProjectDashboard() {
  const [activeView, setActiveView] = useState('overview')
  const [showModal, setShowModal] = useState(false)
  const [tasks, setTasks] = useState([
    {
      id: 1,
      title: 'Design new landing page',
      description: 'Create mockups and prototypes for the new landing page redesign',
      status: 'in-progress',
      priority: 'high',
      assignee: 'Sarah Chen'
    },
    {
      id: 2,
      title: 'Implement authentication',
      description: 'Set up OAuth2 and JWT authentication for the API',
      status: 'in-progress',
      priority: 'high',
      assignee: 'Mike Johnson'
    },
    {
      id: 3,
      title: 'Write API documentation',
      description: 'Document all REST endpoints with OpenAPI specification',
      status: 'todo',
      priority: 'medium',
      assignee: 'Alex Kim'
    },
    {
      id: 4,
      title: 'Database optimization',
      description: 'Optimize slow queries and add proper indexes',
      status: 'done',
      priority: 'high',
      assignee: 'Sarah Chen'
    },
    {
      id: 5,
      title: 'Mobile responsive testing',
      description: 'Test and fix responsive issues across all mobile devices',
      status: 'todo',
      priority: 'medium',
      assignee: 'Mike Johnson'
    }
  ])

  const [newTask, setNewTask] = useState({
    title: '',
    description: '',
    status: 'todo',
    priority: 'medium',
    assignee: ''
  })

  const stats = {
    totalTasks: tasks.length,
    inProgress: tasks.filter(t => t.status === 'in-progress').length,
    completed: tasks.filter(t => t.status === 'done').length,
    pending: tasks.filter(t => t.status === 'todo').length
  }

  const handleAddTask = () => {
    if (newTask.title.trim()) {
      setTasks([...tasks, { ...newTask, id: tasks.length + 1 }])
      setNewTask({ title: '', description: '', status: 'todo', priority: 'medium', assignee: '' })
      setShowModal(false)
    }
  }

  const teamMembers = [
    { name: 'Sarah Chen', role: 'Lead Developer', initials: 'SC' },
    { name: 'Mike Johnson', role: 'Full Stack Dev', initials: 'MJ' },
    { name: 'Alex Kim', role: 'UI/UX Designer', initials: 'AK' },
    { name: 'Emma Davis', role: 'Product Manager', initials: 'ED' }
  ]

  const activities = [
    { date: '2024-01-15', event: 'Sprint 12 completed', details: 'All tasks delivered on time' },
    { date: '2024-01-14', event: 'Database migration', details: 'Successfully migrated to PostgreSQL' },
    { date: '2024-01-13', event: 'New feature deployed', details: 'Real-time notifications now live' },
    { date: '2024-01-12', event: 'Code review session', details: 'Team review of authentication module' }
  ]

  return (
    <div className="dashboard">
      <aside className="sidebar">
        <h3>Dashboard</h3>
        <ul>
          <li className={activeView === 'overview' ? 'active' : ''} onClick={() => setActiveView('overview')}>
            Overview
          </li>
          <li className={activeView === 'tasks' ? 'active' : ''} onClick={() => setActiveView('tasks')}>
            Tasks
          </li>
          <li className={activeView === 'team' ? 'active' : ''} onClick={() => setActiveView('team')}>
            Team
          </li>
          <li className={activeView === 'activity' ? 'active' : ''} onClick={() => setActiveView('activity')}>
            Activity
          </li>
        </ul>
      </aside>

      <div className="content">
        {activeView === 'overview' && (
          <>
            <h2>Project Overview</h2>
            <div className="stats">
              <div className="stat-card">
                <h3>{stats.totalTasks}</h3>
                <p>Total Tasks</p>
              </div>
              <div className="stat-card">
                <h3>{stats.inProgress}</h3>
                <p>In Progress</p>
              </div>
              <div className="stat-card">
                <h3>{stats.completed}</h3>
                <p>Completed</p>
              </div>
              <div className="stat-card">
                <h3>{stats.pending}</h3>
                <p>Pending</p>
              </div>
            </div>
            <h3 style={{ marginTop: '30px', marginBottom: '20px' }}>Recent Tasks</h3>
            <div className="task-list">
              {tasks.slice(0, 3).map(task => (
                <div key={task.id} className="task-item">
                  <div className="task-info">
                    <h4>{task.title}</h4>
                    <p>{task.description}</p>
                    <p style={{ marginTop: '10px', fontSize: '12px', color: '#64748b' }}>
                      Assigned to: {task.assignee}
                    </p>
                  </div>
                  <div className="task-meta">
                    <span className={`status ${task.status}`}>
                      {task.status === 'in-progress' ? 'In Progress' : task.status === 'done' ? 'Done' : 'To Do'}
                    </span>
                    <span className={`priority ${task.priority}`}>
                      {task.priority}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </>
        )}

        {activeView === 'tasks' && (
          <>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '20px' }}>
              <h2>All Tasks</h2>
              <button className="btn" onClick={() => setShowModal(true)}>
                + Add Task
              </button>
            </div>
            <div className="task-list">
              {tasks.map(task => (
                <div key={task.id} className="task-item">
                  <div className="task-info">
                    <h4>{task.title}</h4>
                    <p>{task.description}</p>
                    <p style={{ marginTop: '10px', fontSize: '12px', color: '#64748b' }}>
                      Assigned to: {task.assignee}
                    </p>
                  </div>
                  <div className="task-meta">
                    <span className={`status ${task.status}`}>
                      {task.status === 'in-progress' ? 'In Progress' : task.status === 'done' ? 'Done' : 'To Do'}
                    </span>
                    <span className={`priority ${task.priority}`}>
                      {task.priority}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </>
        )}

        {activeView === 'team' && (
          <>
            <h2>Team Members</h2>
            <div className="team-grid">
              {teamMembers.map(member => (
                <div key={member.name} className="team-member">
                  <div className="avatar">{member.initials}</div>
                  <h4>{member.name}</h4>
                  <p style={{ color: '#94a3b8', fontSize: '14px' }}>{member.role}</p>
                </div>
              ))}
            </div>
          </>
        )}

        {activeView === 'activity' && (
          <>
            <h2>Activity Timeline</h2>
            <div className="timeline">
              {activities.map((activity, index) => (
                <div key={index} className="timeline-item">
                  <div className="timeline-date">{activity.date}</div>
                  <h4>{activity.event}</h4>
                  <p style={{ color: '#94a3b8', marginTop: '8px' }}>{activity.details}</p>
                </div>
              ))}
            </div>
          </>
        )}
      </div>

      {showModal && (
        <div className="modal" onClick={() => setShowModal(false)}>
          <div className="modal-content" onClick={e => e.stopPropagation()}>
            <div className="modal-header">
              <h2>Add New Task</h2>
              <button className="close-btn" onClick={() => setShowModal(false)}>×</button>
            </div>
            <div className="form-group">
              <label>Task Title</label>
              <input
                type="text"
                value={newTask.title}
                onChange={e => setNewTask({ ...newTask, title: e.target.value })}
                placeholder="Enter task title"
              />
            </div>
            <div className="form-group">
              <label>Description</label>
              <textarea
                value={newTask.description}
                onChange={e => setNewTask({ ...newTask, description: e.target.value })}
                placeholder="Enter task description"
              />
            </div>
            <div className="form-group">
              <label>Status</label>
              <select value={newTask.status} onChange={e => setNewTask({ ...newTask, status: e.target.value })}>
                <option value="todo">To Do</option>
                <option value="in-progress">In Progress</option>
                <option value="done">Done</option>
              </select>
            </div>
            <div className="form-group">
              <label>Priority</label>
              <select value={newTask.priority} onChange={e => setNewTask({ ...newTask, priority: e.target.value })}>
                <option value="low">Low</option>
                <option value="medium">Medium</option>
                <option value="high">High</option>
              </select>
            </div>
            <div className="form-group">
              <label>Assignee</label>
              <input
                type="text"
                value={newTask.assignee}
                onChange={e => setNewTask({ ...newTask, assignee: e.target.value })}
                placeholder="Enter assignee name"
              />
            </div>
            <button className="btn" onClick={handleAddTask}>
              Add Task
            </button>
          </div>
        </div>
      )}
    </div>
  )
}
