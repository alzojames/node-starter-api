<!DOCTYPE html>
<html lang="en">

<head>
    <title></title>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <link href="CSS/pre_parking.css" rel="stylesheet">
</head>

<body>
    <h1>Parking</h1>

    <div>
        <form action="POST">
            Leave Date & Time: <input type="date" name="" id="leaving_date">
            <select name="" id="">
                <?php
                $start_Time = strtotime('00:00');
                $end_Time = strtotime('23:00');
                for ($i=$start_Time; $i<=$end_Time ; $i=$i + 30*60) { //increments time by 30 minutes
                    echo '<option>'.date('g:i A',$i).'</option>'; //date format [g:start it @ 12 hour format, i:minutes with no leading 0's, A: Am or Pm at the end of the time]
                }
                ?>
            </select><br>
            Return Date & Time:<input type="date" name="returning_date">
            <select name="" id="">
            <?php
                $start_Time = strtotime('00:00');//Starts the time @ 12:00 AM
                $end_Time = strtotime('23:00');// Ends the time @ 11:00 PM
                for ($i=$start_Time; $i<=$end_Time ; $i=$i + 30*60) { //increments time by 30 minutes
                    echo '<option>'.date('g:i A',$i).'</option>'; //date format [g:start it @ 12 hour format, i:minutes with no leading 0's, A: Am or Pm at the end of the time]
                }
                ?>
            </select>
            <input type="submit" value= "Checkout"name="" id="">
        </form>
    </div>
</body>

</html>