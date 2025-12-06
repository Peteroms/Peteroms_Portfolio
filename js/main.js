async function loadContent() {
    try {
        await loadAbout();
        await loadProjects();
        await loadCertifications();
        await loadBlogPosts();
    } catch (error) {
        console.error('Error loading content:', error);
    }
}

async function loadAbout() {
    try {
        const response = await fetch('content/about.json');
        const data = await response.json();
        document.getElementById('about-content').innerHTML = `
            <p>${data.bio}</p>
            <p><strong>Email:</strong> ${data.email}</p>
        `;
    } catch (error) {
        document.getElementById('about-content').innerHTML = '<p>Content coming soon...</p>';
    }
}

async function loadProjects() {
    try {
        const response = await fetch('content/projects.json');
        const projects = await response.json();
        const grid = document.getElementById('projects-grid');
        grid.innerHTML = projects.map(project => `
            <div class="card">
                <h3>${project.title}</h3>
                <p>${project.description}</p>
                ${project.url ? `<p><a href="${project.url}" target="_blank">View Project</a></p>` : ''}
            </div>
        `).join('');
    } catch (error) {
        document.getElementById('projects-grid').innerHTML = '<p>No projects yet...</p>';
    }
}

async function loadCertifications() {
    try {
        const response = await fetch('content/certifications.json');
        const certs = await response.json();
        const list = document.getElementById('certifications-list');
        list.innerHTML = certs.map(cert => `
            <div class="card">
                <h3>${cert.title}</h3>
                <p>${cert.issuer}</p>
                <p class="date">${cert.date}</p>
            </div>
        `).join('');
    } catch (error) {
        document.getElementById('certifications-list').innerHTML = '<p>No certifications yet...</p>';
    }
}

async function loadBlogPosts() {
    try {
        const response = await fetch('content/blog.json');
        const posts = await response.json();
        const grid = document.getElementById('blog-posts');
        grid.innerHTML = posts.map(post => `
            <div class="card">
                <h3>${post.title}</h3>
                <p>${post.excerpt}</p>
                <p class="date">${new Date(post.date).toLocaleDateString()}</p>
            </div>
        `).join('');
    } catch (error) {
        document.getElementById('blog-posts').innerHTML = '<p>No blog posts yet...</p>';
    }
}

document.addEventListener('DOMContentLoaded', loadContent);
