
// GET 
export async function fetchAlbums() {
    const response = await fetch("https://jsonplaceholder.typicode.com/albums");
    return response.json();
}
// Post function for add album
export async function addAlbum(title:string){
    const response = await fetch("https://jsonplaceholder.typicode.com/albums", {
       method: "POST", 
       body: JSON.stringify({
        title, 
        userId: 1,
    }),
       headers: {
              "Content-type": "application/json; charset=UTF-8",
       }, 
       });
    return response.json();
}

// Put function for edit album
export async function updateAlbum(id: number, title:string){
    const response = await fetch(`https://jsonplaceholder.typicode.com/albums/${id}`,{
        method: "PUT",
        body: JSON.stringify({
            id,
            title,
            userId: 1
        }),
        headers: {
            "Content-type" : "application/json; charset=UTF-8,"
        },
    });
    return response.json();
}

// Delete function 
export async function deleteAlbum(id:number){
  return fetch(`https://jsonplaceholder.typicode.com/albums/${id}`, {
        method : "DELETE",
    });
}