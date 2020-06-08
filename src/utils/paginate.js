export const Paginate = (items, pageNumber, pageSize) =>{
    
    const indexOfLastPost = pageNumber * pageSize;
    const indexOfFirstPost = indexOfLastPost - pageSize;
    const currentPosts = items.slice(indexOfFirstPost, indexOfLastPost);

    return currentPosts;


}

