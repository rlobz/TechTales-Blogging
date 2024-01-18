const newFormHandler = async (event) => {
    event.preventDefault();

    const title = document.querySelector('input[name="post-title"]').value;
    const post_content = document.querySelector('textarea[name="post-content"]').value.trim();

    const MAX_CONTENT_LENGTH = 65535;
    if (post_content.length > MAX_CONTENT_LENGTH) {
        alert(`The post content is too long. Please limit it to ${MAX_CONTENT_LENGTH} characters.`);
        return;
    }

    const response = await fetch(`/api/posts`, {
        method: 'POST',
        body: JSON.stringify({
            title,
            post_content,
        }),
        headers: { 'Content-Type': 'application/json' },
    });

    if (response.ok) {
        document.location.replace('/dashboard');
    } else {
        alert(response.statusText);
    }
};

document
.querySelector('.new-post-form')
.addEventListener('submit', newFormHandler);