"use client"

import { loadChips } from "@/redux/features/globalDataSlice";
import axios from "axios";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

const ClientProvider = ({ children }) => {
  const wishlist = useSelector(state => state.wishlist)
  const dispatch = useDispatch()

  useEffect(() => {
    localStorage.setItem("wishlistItems", JSON.stringify(wishlist))
  }, [wishlist])

  useEffect(() => {
    axios.get(`${process.env.NEXT_PUBLIC_BASE_API_URL}hotels/chips`, {
      headers: {
        'Accept-Language': 'en',
      },
    }).then(res => {
      dispatch(loadChips(res.data))
    }).catch(err => {
      console.log(err)
    })
  }, [])
  
  return children
}

export default ClientProvider