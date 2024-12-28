$(document).ready(function () {
    const $inputBox = $("#input-box");
    const $listContainer = $("#task-container");

    function addTask() {
        if ($inputBox.val() === '') {
            alert("Você precisa adicionar uma tarefa");
        } else {
            let $li = $("<li></li>").text($inputBox.val());
            let $trashBin = $("<span></span>").text("\u00d7").addClass("trashBin");
            $li.append($trashBin);
            $listContainer.append($li);
        }
        $inputBox.val('');
    }

    // Evento de clique para adicionar tarefa
    $("#add-task-button").on("click", addTask);

    // Evento para marcar tarefa como concluída
    $listContainer.on("click", "li", function () {
        $(this).toggleClass("checked");
    });

    // Evento para remover tarefa
    $listContainer.on("click", ".trashBin", function (e) {
        e.stopPropagation();
        $(this).parent().remove();
    });
});