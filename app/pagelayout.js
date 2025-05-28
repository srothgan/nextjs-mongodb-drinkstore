// PageLayout.js
import React from 'react';

const PageLayout = ({ children }) => {
  const components = React.Children.toArray(children);

  return (
    <div>
      {/* large screen structure*/}
      <div className='w-full hidden lg:flex bg-white'>
        <div className="block w-[65%]">
            <div className="h-auto bg-white">
                {components[0]}
            </div>
            <div className="flex ">
                {components[1]}
            </div>
          </div>

            <div className="h-auto w-[35%]">
                {components[2]}
            </div>

      </div>
      {/* mobile structure*/}
      <div className='block lg:hidden w-[100%] bg-white'>
          {components[0]}
          {components[1]}
          {components[2]}
      </div>
    </div>
  );
};

export default PageLayout;

