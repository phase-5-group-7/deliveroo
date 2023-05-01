
import * as React from 'react';

import '../Order/order.css';


export const ProgressBar =  ({percent,end}) => {  

    return (
        <div>
        <div className="progress-div" style={{ width: "-webkit-fill-available" }}>
          <div style={{ width: `${percent}%` , borderEndEndRadius: !end ? "40px" : "0px",
        borderStartEndRadius:  !end ? "40px" : "0px",}} className="progress" />
        </div>
      </div>
    )
}