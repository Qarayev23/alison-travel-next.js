"use client"

import { useEffect } from "react";
import { useSelector } from "react-redux";

const ClientProvider = ({ children }) => {
    const wishlist = useSelector(state => state.wishlist)

    useEffect(() => {
        localStorage.setItem("wishlistItems", JSON.stringify(wishlist))
      }, [wishlist])

    return children
}

export default ClientProvider