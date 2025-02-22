const daysGR = ['Κυριακή', 'Δευτέρα', 'Τρίτη', 'Τετάρτη', 'Πέμπτη', 'Παρασκευή', 'Σάββατο']
const monthsGR = [
  'Ιανουαρίου', 'Φεβρουαρίου', 'Μαρτίου', 'Απριλίου', 'Μαΐου', 'Ιουνίου',
  'Ιουλίου', 'Αυγούστου', 'Σεπτεμβρίου', 'Οκτωβρίου', 'Νοεμβρίου', 'Δεκεμβρίου'
]

/**
 * State
 */
let notes = []
let count = 0

$(function() {
  setInterval(() => printGRDate(), 1000);

  $('#addNoteBtn').on('click', function(){
    onInsertHandler({key: count + 1, note: $('#inputNote').val().trim(), softDeleted: false})
  })

  $('#inputNote').on('keyup', function(e) {
    if (e.key === 'Enter') {
      onInsertHandler({key: count + 1, note: e.target.value.trim(), softDeleted: false})
    }
  })
})


function printGRDate() {
  const now = new Date()
  const day = now.getDay()
  const date = now.getDate()
  const month = now.getMonth()
  const year = now.getFullYear()
  const hours = now.getHours()
  const minutes = now.getMinutes()
  const seconds = now.getSeconds()

  const strDate = `${daysGR[day]}, ${date} ${monthsGR[month]} ${year}`
  const strTime = `${(hours < 10) ? '0':''}${hours}:${(minutes < 10) ? '0':''}${minutes}:${(seconds < 10) ? '0':''}${seconds}`
  $('#dateTxt').html(`${strDate}<br>${strTime}`)
}

/**
 * Controller
 */

function onInsertHandler(data) {
  if (!data.note) return
  insertNote(data)
  reset()
}

/**
 * Model Function
 */

function insertNote(note) {
  notes = [...notes, note]
  count++
  renderNotes()
}

/**
 * View Function
 */
function renderNotes() {
  const container = $('#notesWrapper')
  container.html(
    notes.map(note => `
      <div id="noteTemplate${note.key}" class="flex flex-row justify-between items-center px-[10px] py-[2px] border-b border-black">
        <div id="noteInfo${note.key}" class="flex items-center">
          <input type="checkbox" id="noteCheckBox${note.key}" class="w-[25px] h-[25px] mr-[5px]" 
            onclick="strikeThrough(${note.key})" ${note.softDeleted ? 'checked' : ''}>
          <label id="noteTxt${note.key}" for="noteCheckBox${note.key}" 
            class="w-[200px] max-h-[150px] leading-[1.2rem] overflow-hidden break-words whitespace-normal text-base ${note.softDeleted ? 'line-through text-gray-500' : ''}">${note.note}</label>
        </div>
        <button id="noteDelBtn${note.key}" type="button" onclick="deleteNote(${note.key})" class="w-[35px] h-[35px]">X</button>
      </div>`).join('')
  )  
}

/**
 * Model Functions
 */

function strikeThrough(key) {
  notes = notes.map(note => 
    (note.key === key) ? {...note, softDeleted: !note.softDeleted} : {...note})
  renderNotes()
}


function deleteNote(key) {
  notes = notes.filter(note => note.key !== key)
  renderNotes()
}



/**
 * View Function
 */
function reset() {
  $('#inputNote').val('')
}

