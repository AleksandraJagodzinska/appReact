import React from 'react'
const MyFirstComponent = ({name,showName}) => (
    <div>
        <h1>
            Hello World {showName?
            name
            :
            null}
        </h1>
    </div>
    )
export default MyFirstComponent