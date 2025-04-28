import React from "react";

const Map: React.FC = () => {
  return (
    <div id="map-area">
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3928.8129310888517!2d105.77202127456667!3d10.032290572479203!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31a088227282a91f%3A0x904f2f45d980b0d6!2zMiDEkC4gMyBUaMOhbmcgMiwgQW4gUGjDuiwgTmluaCBLaeG7gXUsIEPhuqduIFRoxqEsIFZp4buHdCBOYW0!5e0!3m2!1svi!2s!4v1731483509716!5m2!1svi!2s"
        width="100%"
        height="450"
        style={{ border: 0 }}
        loading="lazy"
        title="This is a unique title"
      ></iframe>
    </div>
  );
};

export default Map;
