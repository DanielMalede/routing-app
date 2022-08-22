import { One, Two, Three } from './components/pages/index'

export default function ChangePages ({pages}){
    switch (pages) {
      case "One":
        return <One />
      case "Two":
        return <Two />
      case "Three":
        return <Three />
      default:
        break;
    }
  }
  export function PagesNameChange({pages}) {
    switch (pages) {
        case "Home":
            return 

        default:
            break;
    }
    
  }