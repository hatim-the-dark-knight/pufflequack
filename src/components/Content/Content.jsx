import React from 'react'
import { Stack, ImageList, ImageListItem, ImageListItemBar } from '@mui/material'
import './Content.css'
import data from '../../utils/categories.json'

const Content = () => {
  return (
    <Stack className="grid">
      <ImageList cols={3} rowHeight={200} >
      {
        data.map((item, i) => {
          return(
            <ImageListItem id={i} >
              <img
                srcSet={`${item.image}?w=64&h=64`}
                src={`${item.image}?w=64&h=64`}
                alt={item.title}
              />
              <a href='#' className='card-label'>  
                <ImageListItemBar
                  title={item.title}
                  subtitle={<span> {item.items.length}</span>}
                  position="below"
                />
              </a>
            </ImageListItem>
          )
        })
      }
      </ImageList>
        {/* <div className="item-card">
            <img src="/Burger_148.png" alt="" />
            <div className="label">
                Burger * <b>$4.99</b>
            </div>
            <button className="addButton">
                ADD
            </button>
        </div> */}
    </Stack>
  )
}

export default Content


