import React, { useState } from 'react'
import '../components/searchbar.css'
import search from "../../src/assets/search.png"
import { axiosSearchInstance } from '../instance/axios'
import { useNavigate } from 'react-router-dom'
import validator from 'validator'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const SearchBar = () => {

  const [url, setUrl] = useState('');
  const [imageCount, setImageCount] = useState('');
  const [wordCount, setWordCount] = useState('');
  const navigate = useNavigate()
  
  async function handleSubmit(e) {
    e.preventDefault();
    try {
      if (validator.isURL(url)) {
        const resp = await axiosSearchInstance;
        resp
          .post("/wordcount", { url: url })
          .then((resp) => {
            console.log(resp.data);
            setImageCount(resp.data.imageCount);
            setWordCount(resp.data.wordsCount);
          })
          .catch((err) => {
            toast.error('Not a valid Url!', {
              position: "top-right",
              autoClose: 5000,
              hideProgressBar: false,
              closeOnClick: true,
              pauseOnHover: true,
              draggable: true,
              progress: undefined,
              theme: "light",
              });
            // console.log(err);
          });
      } else {
        toast.error('Not a valid Url!', {
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
          });
      }
    } catch (error) {
      throw new Error("submission error");
    }
  }

  
    


  return (
    <div className='main-div'>
      <div className='button-div'>
        <button onClick={(() => navigate('/history'))}>Check History</button>
      </div>
    <div className='container'>
        <ToastContainer />
        <form onSubmit={handleSubmit} className='search-bar'>
          <input value={url} onChange={(e) => setUrl(e.target.value)} type="text" name="q" placeholder='Paste website url' />
          <button type='submit'><img src={search} alt="Search" /></button>
        </form>
    <div className='count-title'>
      <h4>Words Count : {wordCount ? wordCount : 0}</h4>
    </div>
    <div className='count-title'>
      <h4>Media Count : {imageCount ? imageCount : 0}</h4>
    </div>

    </div>
    </div>
  )
}

export default SearchBar
