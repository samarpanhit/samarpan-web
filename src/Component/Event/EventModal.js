import React, { useRef } from 'react'
import budh from '../../assets/bushpurnima.jpg'
import './event.css'

const EventModal = () => {
    const opmod = useRef(null)
    setTimeout(function () {
        opmod.current.click()
    }, 2000);
  return (
      <div>
          {/* Button trigger modal  */}
          <div style={{display: "none"}}>
          <button ref={opmod} type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#staticBackdrop">
              Launch static backdrop modal
          </button>
          </div>

          {/* Modal */}
          <div class="modal fade" id="staticBackdrop" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
              <div class="modal-dialog modal-dialog-centered">
                  <div style={{backgroundImage: "url("+budh+")"}} class="modal-content">
                      <div class="modal-header border-bottom-0" style={{bcakground: "rgba(0,0,0,0.1)"}}>
                          <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                      </div>
                  </div>
              </div>
          </div>
    </div>
  )
}

export default EventModal