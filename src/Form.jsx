import React from "react";
import { useForm } from "react-hook-form";
import { TextField, Button, Box } from "@mui/material";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";

const itinerarySchema = z.object({
  destination: z.string().min(1, "Destination is required"),
  origin: z.string().min(1, "Origin is required"),
  date: z.string().min(1, "Date is required"),
  numberOfDays: z.number().min(1, "At least 1 day is required"),
  transportMode: z.string().min(1, "Select a transport mode"),
  numberOfPeople: z.number().min(1, "At least 1 person is required"),
  otherDetails: z.string().optional(),
  whatsappNumber: z
    .string()
    .min(1, "WhatsApp number is required")
    .regex(/^\d{10}$/, "Enter a valid 10-digit phone number"),
  emailId: z.string().email("Enter a valid email address"),
});

const Form = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(itinerarySchema),
  });

  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <Box
      component="form"
      onSubmit={handleSubmit(onSubmit)}
      sx={{
        display: "flex",
        flexDirection: "column",
        width: "500px",
        margin: "0 auto",
        padding: 3,
        border: "1px solid #ccc",
        borderRadius: "8px",
        alignItems: "flex-start",
      }}
    >
      <Box container spacing={3}>
        {/* Destination Field */}
        <Box item xs={12}>
          <div
            style={{
              display: "flex",

              alignItems: "center",
              marginBottom: "16px",
            }}
          >
            <label htmlFor="destination" style={{ marginRight: "80px" }}>
              I plan to go to
            </label>
            <TextField
              label="Destination"
              fullWidth
              {...register("destination")}
              error={!!errors.destination}
              helperText={errors.destination?.message}
              sx={{
                borderRadius: "8px", // Adding border-radius for all text fields
                "& .MuiInputBase-root": {
                  borderRadius: "8px",
                },
              }}
            />
          </div>
        </Box>

        {/* Origin Field */}
        <Box item xs={12}>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              marginBottom: "16px",
            }}
          >
            <label htmlFor="origin" style={{ marginRight: "110px" }}>
              from
            </label>
            <TextField
              label="Origin"
              fullWidth
              {...register("origin")}
              error={!!errors.origin}
              helperText={errors.origin?.message}
              sx={{
                borderRadius: "8px",
                "& .MuiInputBase-root": {
                  borderRadius: "8px",
                },
              }}
            />
          </div>
        </Box>

        {/* Date Field */}
        <Box item xs={12}>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              marginBottom: "16px",
            }}
          >
            <label htmlFor="Date" style={{ marginRight: "120px" }}>
              On
            </label>
            <TextField
              label="Date"
              type="date"
              fullWidth
              {...register("date")}
              error={!!errors.date}
              helperText={errors.date?.message}
              InputLabelProps={{
                shrink: true,
              }}
              sx={{
                borderRadius: "8px",
                "& .MuiInputBase-root": {
                  borderRadius: "8px",
                },
              }}
            />
          </div>
        </Box>

        {/* Number of Days Field */}
        <Box item xs={12}>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              marginBottom: "16px",
            }}
          >
            <label htmlFor="numberOfDays" style={{ marginRight: "120px" }}>
              for
            </label>
            <TextField
              label="Number of Days"
              type="number"
              fullWidth
              {...register("numberOfDays")}
              error={!!errors.numberOfDays}
              helperText={errors.numberOfDays?.message}
              sx={{
                borderRadius: "8px",
                "& .MuiInputBase-root": {
                  borderRadius: "8px",
                },
              }}
            />
          </div>
        </Box>

        {/* Transport Mode Field */}
        <Box item xs={12}>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              marginBottom: "16px",
            }}
          >
            <label htmlFor="transportMode" style={{ marginRight: "30px" }}>
              My Preferred Mode is
            </label>
            <TextField
              label="RoadTrip/Flight/Train"
              fullWidth
              {...register("transportMode")}
              error={!!errors.transportMode}
              helperText={errors.transportMode?.message}
              sx={{
                borderRadius: "8px",
                "& .MuiInputBase-root": {
                  borderRadius: "8px",
                },
              }}
            />
          </div>
        </Box>

        {/* Number of People Field */}
        <Box item xs={12}>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              marginBottom: "16px",
            }}
          >
            <label
              htmlFor="numberOfPeople"
              style={{ flexShrink: 2, marginRight: "40px" }}
            >
              Number of People who are travelling
            </label>
            <TextField
              label="Number of People"
              type="number"
              fullWidth
              {...register("numberOfPeople")}
              error={!!errors.numberOfPeople}
              helperText={errors.numberOfPeople?.message}
              sx={{
                borderRadius: "8px",
                "& .MuiInputBase-root": {
                  borderRadius: "8px",
                },
              }}
            />
          </div>
        </Box>
        <Box item xs={12}>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              marginBottom: "16px",
            }}
          >
            <label
              htmlFor="I am travelling for"
              style={{ marginRight: "70px" }}
            >
              I am travelling for
            </label>
            <TextField
              label="Purpose"
              type="number"
              fullWidth
              {...register("numberOfPeople")}
              error={!!errors.numberOfPeople}
              helperText={errors.numberOfPeople?.message}
              sx={{
                borderRadius: "8px",
                "& .MuiInputBase-root": {
                  borderRadius: "8px",
                },
              }}
            />
          </div>
        </Box>

        {/* Other Details Field */}
        <Box item xs={12}>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              marginBottom: "16px",
            }}
          >
            <label htmlFor="otherDetails" style={{ marginRight: "20px" }}>
              Other Details about my travel
            </label>
            <TextField
              label=""
              fullWidth
              multiline
              rows={4}
              {...register("otherDetails")}
              sx={{
                borderRadius: "8px",
                "& .MuiInputBase-root": {
                  borderRadius: "8px",
                },
              }}
            />
          </div>
        </Box>

        {/* WhatsApp Number Field */}
        <Box item xs={12}>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              marginBottom: "16px",
            }}
          >
            <label htmlFor="whatsappNumber" style={{ marginRight: "50px" }}>
              My contact number is
            </label>
            <TextField
              label="WhatsApp Number"
              fullWidth
              {...register("whatsappNumber")}
              error={!!errors.whatsappNumber}
              helperText={errors.whatsappNumber?.message}
              sx={{
                borderRadius: "8px",
                "& .MuiInputBase-root": {
                  borderRadius: "8px",
                },
              }}
            />
          </div>
        </Box>

        {/* Email ID Field */}
        <Box item xs={12}>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              marginBottom: "16px",
            }}
          >
            <label htmlFor="emailId" style={{ marginRight: "80px" }}>
              My Email ID is
            </label>
            <TextField
              label="Email ID"
              fullWidth
              {...register("emailId")}
              error={!!errors.emailId}
              helperText={errors.emailId?.message}
              sx={{
                borderRadius: "8px",
                "& .MuiInputBase-root": {
                  borderRadius: "8px",
                },
              }}
            />
          </div>
        </Box>

        {/* Submit Button */}
        <Box item xs={12}>
          <Button
            variant="contained"
            color="primary"
            type="submit"
            fullWidth
            sx={{
              marginTop: 2,
              margin: "10px",
              padding: "10px",
              marginRight: "80px",
              flexShrink: 0,
              borderRadius: "5px",
            }}
          >
            Get a personal itinerary on WhatsApp/Email id
          </Button>
        </Box>
      </Box>
    </Box>
  );
};

export default Form;
