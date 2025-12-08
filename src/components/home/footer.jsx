import {Link} from "react-router-dom"
import { BookOpen } from "lucide-react"

export function Footer() {

  return (
    <footer className=" border-border bg-muted/30 px-4 py-5  lg:py-12 sm:px-6 lg:px-8">
 
        <div className="mt-6 border-t border-border pt-8 text-center text-sm text-muted-foreground">
          <p>© {new Date().getFullYear()} Kotta Note. All rights reserved.| Developed by <a href="http://www.linkedin.com/in/irshadudheenp" className="underline" target="_blank" rel="noopener noreferrer">Irshadudheen P</a></p>
        </div>
    </footer>
  )
}
