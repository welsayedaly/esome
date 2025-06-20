import React from "react";
import { Helmet } from "react-helmet-async";

const ChatwayScript = () => {
  return (
    <Helmet>
      <script 
        id="chatway" 
        async="true" 
        src="https://cdn.chatway.app/widget.js?id=JTwlJq7E0EHt"
      />
    </Helmet>
  );
};

export default ChatwayScript;