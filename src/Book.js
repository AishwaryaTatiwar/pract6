import React from 'react'
function Book(props) {
if(props.bookName === "The Hitvada") {
throw new Error("Not a Book");
}
return <h1>{props.bookName}</h1>
}
export default Book