function imageClick(view) {
    const holder = document.getElementById("img-big");
    holder.src = view.src;
    holder.style.display = "block";
    
    document.querySelector("html").style.overflow = "hidden";
    holder.onclick = function() {
        holder.style.display = "none";
        document.querySelector("html").style.overflow = "initial";
    }
}