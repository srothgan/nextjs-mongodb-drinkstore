import * as React from 'react';
import { Html } from '@react-email/html';
import { Button } from '@react-email/button';

export default function Email(name, email, nachricht) {
  const { url } = "https://www.google.de/?hl=de";

  return (
    <Html lang="de">
        <div className='block'>
            <div className='flex'>
                <p className='mr-8'>Name</p>
                <p>{name}</p>
            </div>
            <div className='flex'>
                <p className='mr-8'>E-Mail</p>
                <p>{email}</p>
            </div>
            <div className='flex'>
                <p className='mr-8'>Nachricht</p>
                <p>{nachricht}</p>
            </div>
        </div>
      <Button href={url}>Click me</Button>
    </Html>
  );
}

