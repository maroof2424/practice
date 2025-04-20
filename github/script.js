async function getUser() {
    const username = document.getElementById('username').value.trim();
    const profileCard = document.getElementById('profile');
  
    if (!username) {
      alert("Please enter a GitHub username.");
      return;
    }
  
    try {
      const res = await fetch(`https://api.github.com/users/${username}`);
      const data = await res.json();
  
      if (data.message === "Not Found") {
        alert("User not found 😢");
        profileCard.classList.add('hidden');
        return;
      }
  
      document.getElementById('avatar').src = data.avatar_url;
      document.getElementById('name').textContent = data.name || data.login;
      document.getElementById('bio').textContent = data.bio || "No bio available.";
      document.getElementById('followers').textContent = data.followers;
      document.getElementById('following').textContent = data.following;
      document.getElementById('repos').textContent = data.public_repos;
      document.getElementById('profileLink').href = data.html_url;
  
      profileCard.classList.remove('hidden');
    } catch (error) {
      console.error(error);
      alert("Something went wrong.");
    }
  }
  