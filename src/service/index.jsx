

export const upvote = (id) => {

    // Get the votes from local storage
    const votes = localStorage.getItem('votes') ? JSON.parse(localStorage.getItem('votes')) : {
        upvotes: [],
        downvotes: []
    };
    if (votes.upvotes.indexOf(id) !== -1) {
        return false;
    }
    votes.upvotes.push(id);

    const downvotes = votes.downvotes.filter(item => item !== id);
    votes.downvotes = downvotes;

    localStorage.setItem('votes', JSON.stringify(votes));
    return true;
}

export const downvote = (id) => {

    // Get the votes from local storage
    const votes = localStorage.getItem('votes') ? JSON.parse(localStorage.getItem('votes')) : {
        upvotes: [],
        downvotes: []
    };
    if (votes.downvotes.indexOf(id) !== -1) {
        return false;
    }
    votes.downvotes.push(id);

    const upVotes = votes.upvotes.filter(item => item !== id);
    votes.upvotes = upVotes;

    localStorage.setItem('votes', JSON.stringify(votes));
    return true;
}

// check if it's already upvoted
export const isUpvoted = (id) => {

    const votes = JSON.parse(localStorage.getItem('votes')) || {
        upvotes: [],
        downvotes: []
    };

    return votes.upvotes.find(item => item === id);
}

// check if it's already downvoted

export const isdownvoted = (id) => {

    const votes = JSON.parse(localStorage.getItem('votes')) || {
        upvotes: [],
        downvotes: []
    };

    return votes.downvotes.find(item => item === id);
}