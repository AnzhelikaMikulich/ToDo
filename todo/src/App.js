import { useRef, useState } from "react";
import "./App.css";
import React from "react";
import MySelect from "./components/UI/select/MySelect";
import PostForm from "./components/PostForm";
import PostItem from "./components/PostItem";
import PostList from "./components/PostList";
import MyBytton from "./components/UI/button/MyButton";
import MyInput from "./components/UI/input/MyInput";
function App() {
  const [posts, setPost] = useState([
    { id: 1, title: "JavaScript", body: "cdescription" },
    { id: 2, title: "JavaScript", body: "bdescription 2" },
    { id: 3, title: "JavaScript", body: "adescription3" },
    { id: 4, title: "JavaScript", body: "vdescription4" },
  ]);
function getSortedPosts(){
  if(selectedSort){
    return [...posts].sort((a,b)=>a[selectedSort].localeCompare(b[selectedSort]))
  }
  return posts
}
  const [selectedSort, setSelectedSort] = useState("");
  const sortedPosts = getSortedPosts()
  const createPost = (newPost) => {
    setPost([...posts, newPost]);
  };
  const removePost = (post) => {
    setPost(posts.filter((p) => p.id !== post.id));
  };
  const sortPosts = (sort) =>{
    setSelectedSort(sort)
  }
  
    const [searchQvery, setSearchQvery] = useState('')

  return (
    <div className="App">
      <PostForm create={createPost}></PostForm>
      <hr style={{ margin: "15px 0" }} />
      <div>
        <MyInput value={searchQvery} onChange={e=> setSearchQvery(e.target.value)} placeholder = 'Поиск...'></MyInput>
        <MySelect
          value={selectedSort}
          onChange={sortPosts}
          defaultValue={"Сортировка по"}
          options={[
            {
              value: "title",
              name: "По названию",
            },
            { value: "body", name: "По описанию" },
          ]}
        ></MySelect>
      </div>

      {posts.length ? (
        <PostList
          remove={removePost}
          posts={sortedPosts}
          title="Список постов 1"
        ></PostList>
      ) : (
        <h1 style={{ textAlign: "center" }}>Посты не найдены</h1>
      )}
    </div>
  );
}

export default App;
